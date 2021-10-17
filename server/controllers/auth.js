import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Auth from '../models/auth.js';
import Profile from '../models/Profile.js';
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
        const profile = await Profile.create({userName:`${firstName} ${lastName}`,emailId,phone,timeStamp:new Date().toLocaleDateString(),
          address:'Not Added',rewardedCash:'0.0',giftVouchers:'0'});
        const userName = firstName+lastName;
        const result = {userName:userName,emailId,phone,timeStamp:new Date().toLocaleDateString()};
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
        const result = {userName:userName,emailId,phone,timeStamp:new Date().toLocaleDateString()};
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
            const profile = await Profile.create({userName:`${firstName} ${lastName}`,emailId,phone:'Not Added',timeStamp:new Date().toLocaleDateString(),
             address:'Not Added',rewardedCash:'0.0',giftVouchers:'0'});
            const userName = firstName + lastName;
            const result = {userName:userName,emailId,timeStamp:new Date().toLocaleDateString()};
            const token = jwt.sign({emailId:user.emailId},process.env.SECRET_KEY,{expiresIn:'1h'});
            return res.status(201).json({result,token});
        }
        else{
            const changedPassword = password + process.env.SECRET_KEY;
            const confirmPassword = await bcrypt.compare(changedPassword,existingId.password);
            if(!confirmPassword) return res.status(409).json({message:'Invalid Credentials Entered'});

            const userName = existingId.firstName+existingId.lastName;
            const result = {userName:userName,emailId,timeStamp:new Date().toLocaleDateString()};
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

        const token = jwt.sign({_id:existingId._id,emailid:existingId.emailId},process.env.SECRET_KEY,{expiresIn:'10m'});

        let transport = nodemailer.createTransport({
            host:'localhost',
            port:587,
            service:'gmail',
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        });
        const link = "http://localhost:3000/auth/resetPassword/"+existingId._id+"/"+token;
        const mailOptions = {
            from:process.env.MAIL_USER,
            to:existingId.emailId,
            subject:"Password Reset - Marca Scarpe",
            html:`<h5>Below is your Password Reset link for you Marca Scarpe Website.(Notice this link is 
                applicable for only 10 minutes. So reset your password within this time only).</h5>
                <br>
                Click this <a href="${link}">
                Link</a> to reset your password.`
        }
        transport.sendMail(mailOptions,(err,info)=> {
            if(err)
             console.log(err);
            else 
             console.log(info); 
        });
        return res.status(200).json({message:`Link send to respective email ID.
        (As it is not an business account, Email was sent to your spam folder.)`});
    } catch (error) {
        return res.status(404).json({message:error});
    }
}

export const resetPassword = async(req,res) => {
    const {id,token,password} = req.body;
    try {
        const existingId = await Auth.findOne({_id:id});
        if(!existingId) res.status(404).json({message:'Changing Password on Invalid Link!'});

        const existingToken = jwt.verify(token,process.env.SECRET_KEY);
        if(!existingToken) res.json(404).json({message:'Link you are using is already expired!'});

        const changedPassword = password + process.env.SECRET_KEY;
        const hashedPassword =  await bcrypt.hash(changedPassword,12);

        const changedUser = await Auth.updateOne({_id:id},{password:hashedPassword});
        return res.status(201).json({message:'Password changed successfully.You can now login to your account.'});
    } catch (error) {
        return res.status(404).json({message:error});
    }
}