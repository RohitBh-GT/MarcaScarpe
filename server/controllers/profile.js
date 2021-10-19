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

export const updateWishlist = async(req,res) => {
    const { email } = req.params;
    const wishData = req.body;
    try {
        const existingProfile = await Profile.findOne({emailId:email});
        if(!existingProfile) return res.status(404).json({message:'Profile does not exists.'});

        await Profile.findByIdAndUpdate(existingProfile._id,{$push:{wishlist:wishData}});
        return res.status(200).json(wishData);
    } catch (error) {
        return res.status(404).json({message:'Wishlist can\'t be update at this time.'});
    }
}

export const deleteWishlistItem = async(req,res) => {
    const { email } = req.params;
    const wishData = req.body;
    try {
        const existingProfile = await Profile.findOne({emailId:email});
        if(!existingProfile) return res.status(404).json({message:'Profile does not exists.'});

        await Profile.findByIdAndUpdate(existingProfile._id,{$pull:{wishlist:wishData}});
        return res.status(200).json(wishData);
    } catch (error) {
        return res.status(404).json({message:'Wishlist can\'t be update at this time.'});
    }
}

export const addOrders = async(req,res) => {
    const { email } = req.params;
    const orderData = req.body;
    try {
        const existingProfile = await Profile.findOne({emailId:email});
        if(!existingProfile) return res.status(404).json({message:'This profile doesn\'t exists.'});

        await Profile.findByIdAndUpdate(existingProfile._id,{$push:{orders:orderData}});
        return res.status(200).json(orderData);
    } catch (error) {
        return res.status(404).json({message:'Wishlist can\'t be update at this time.'});
    }
}