import Profile from '../models/Profile.js';

export const getProfile = async(req,res) => {
    const {email} = req.params;
    try {
        const existingProfile = await Profile.find({emailId:email});
        if(!existingProfile) return res.status(402).json({message:'This profile not exists.'});

        return res.status(200).json(existingProfile);
    } catch (error) {
        return res.status(404).json({message:'Server Problem.Try again.'});
    }
}