import mongoose from 'mongoose';
import { shoesSchema } from './shoes.js';

const profileSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    timeStamp: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    address: String,
    rewardedCash: String,
    giftVouchers: String,
    wishlist: [shoesSchema],
    orders: [{
        products: [{
            description: [String],
            forGender: String,
            productBrand: String,
            productColor: String,
            productDiscountPrice: String,
            productImage: String,
            productName: String,
            productPrice: String,
            productRating: Number,
            quantity: Number,
            size: String
        }],
        totalPrice: String,
        address:String,
        dateOfOrder:String
    }]
});

const profile = mongoose.model('profile',profileSchema);

export default profile;