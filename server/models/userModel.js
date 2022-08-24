const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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


module.exports = mongoose.model("User",userSchema)