import mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        unique:true
    },
    timeStamp:{
        type:String,
        default:new Date().toLocaleDateString()
    }
});

const auth = mongoose.model('auth',authSchema);

export default auth;