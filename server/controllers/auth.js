import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Auth from '../models/auth.js';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

export const signup = async(req,res) => {
    const {firstName,lastName,emailId,password,phone} = req.body;
    try {
        const existingId = await Auth.findOne({emailId});
        if(existingId) return res.status(401).json({message:'Email Id entered already exists'});

        const existingPhone = await Auth.findOne({phone});
        if(existingPhone) return res.status(401).json({message:'Phone No. entered already exists'});

        const changedPassword = password+process.env.SECRET_KEY;
        const hashedPassword =  await bcrypt.hash(changedPassword,12);

        const user = await Auth.create({firstName,lastName,emailId,password:hashedPassword,phone,timeStamp:new Date().toLocaleDateString()});
        const userName = firstName+lastName;
        const result = {userName:userName,emailId,phone};
        const token = jwt.sign({emailId:user.emailId,phone:user.phone},process.env.SECRET_KEY,{expiresIn:'1h'});
        return res.status(201).json({result,token});
    } catch (error) {
        return res.status(404).json({message:'Server Error Occured'});
    }
}

export const signin = async(req,res) => {
    const {emailId,phone,password} = req.body;
    try {
        const existingId = await Auth.findOne({emailId});
        if(!existingId) return res.status(401).json({message:'Email Id entered doesn\'t exists'});

        if(phone !== existingId.phone) return res.status(409).json({message:"Phone No. doesn\'t match with email Id"});

        const changedPassword = password+process.env.SECRET_KEY;
        const confirmPassword = await bcrypt.compare(changedPassword,existingId.password);
        if(!confirmPassword) return res.status(409).json({message:'Invalid Credentials Entered'}); 

        const userName = existingId.firstName+existingId.lastName;
        const result = {userName:userName,emailId,phone};
        const token = jwt.sign({emailId:existingId.emailId,phone:existingId.phone},process.env.SECRET_KEY,{expiresIn:'1h'});
        return res.status(201).json({result,token});
    } catch (error) {
        return res.status(404).json({message:'Server Error'});
    }
}

export const GoogleLogin = async(req,res) => {
    const {firstName,lastName,emailId,password} = req.body;
    try {
        const existingId = await Auth.findOne({emailId});
        if(!existingId){
            const changedPassword = password + process.env.SECRET_KEY;
            const hashedPassword =  await bcrypt.hash(changedPassword,12);

            const user = await Auth.create({firstName,lastName,emailId,password:hashedPassword,timeStamp:new Date().toLocaleDateString()});
            
            const userName = firstName + lastName;
            const result = {userName:userName,emailId};
            const token = jwt.sign({emailId:user.emailId},process.env.SECRET_KEY,{expiresIn:'1h'});
            return res.status(201).json({result,token});
        }
        else{
            const changedPassword = password + process.env.SECRET_KEY;
            const confirmPassword = await bcrypt.compare(changedPassword,existingId.password);
            if(!confirmPassword) return res.status(409).json({message:'Invalid Credentials Entered'});

            const userName = existingId.firstName+existingId.lastName;
            const result = {userName:userName,emailId};
            const token = jwt.sign({emailId:existingId.emailId},process.env.SECRET_KEY,{expiresIn:'1h'});
            return res.status(201).json({result,token});
        }
    } catch (error) {
        return res.status(404).json({message:'Server Error'});
    }
}

export const forgotPassword = async(req,res) => {
    const {emailId} = req.body;
    try {
        const existingId = await Auth.findOne({emailId});
        if(!existingId) return res.status(404).json({message:'Email you entered doesn\'t exists!'});

        let transport = nodemailer.createTransport({
            host:'localhost',
            port:587,
            service:'gmail',
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            },
            tls: {
                rejectUnauthorized: true
            }
        });
        await transport.sendMail({
            from:process.env.MAIL_USER,
            to:existingId.emailId,
            subject:"Password Reset - Marca Scarpe",
            text:`Password Reset Link- Yahan aayega`
        });
        return res.status(200).json({message:"Link send to respective email ID"});
    } catch (error) {
        return res.status(404).json({message:error});
    }
}