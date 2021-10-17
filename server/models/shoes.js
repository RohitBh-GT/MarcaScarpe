import mongoose from 'mongoose';

export const shoesSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productBrand:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    productDiscountPrice:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    description:[String],
    forGender:{
        type:String,
    },
    productRating:Number,
    productReviews:[{
        personName:String,
        personReview:String,
        personRating:Number,
        reviewDate:String
    }],
    productColors:[{
        colorName:String,
        colorPhoto:String
    }],
    stock:Number
});

const shoes = mongoose.model('shoes',shoesSchema);

export default shoes;