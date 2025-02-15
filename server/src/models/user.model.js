import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema= Schema({
    username:{
        type: String,
        req: true,
        
    },
    email:{
        type:String,
        req: true,
        unique: true

    },
    password:{
        type: String,
        req: true,

    }
},{ timestamps:true})

//Password Encryption
userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next(); //checks if the password is  modified, returns if not.
    
    this.password= await bcrypt.hash(this.password, 10);
    next();
})


//Password Checking Method    
userSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password,this.password)
}


//Access Token Generating method
userSchema.methods.generateAccessTokens= function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName

        },

        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXIPIRY
        }
    )
}

//Refresh Token Generating method
userSchema.methods.generateRefreshTokens=function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName

        },

        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const User=mongoose.model("User",userSchema)