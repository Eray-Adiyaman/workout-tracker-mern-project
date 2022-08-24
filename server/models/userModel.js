const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const Schema = mongoose.Schema

const userSchema = new Schema({

    email:{
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    }

})

//Static Signup Method
userSchema.statics.signup = async function (email,password) {

    //validation
    if(!email || !password){
        throw Error("All fields must be filled!")
    }

    if(!validator.isEmail(email)){
        throw Error("Email not valid")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough")
    }

    const exists = await this.findOne( { email } )
    
    //if email already being used
    if(exists){
        throw Error("email already in use")
    }

    //hashing password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create( { email, password: hash } )

    return user

}

//Static Login Method

userSchema.statics.login = async function(email,password) {
    
    //validation
    if(!email || !password){
        throw Error("All fields must be filled!")
    }

    const user = await this.findOne( { email } )
    
    //if email does not match
    if(!user){
        throw Error("incorrect email")
    }

    const match = await bcrypt.compare(password,user.password)

    //if password does not match
    if(!match){
        throw Error("Incorrect Password")
    }

    return user

}


module.exports = mongoose.model("User",userSchema)