const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth =  async (req,res,next) => {

    //verify authentication
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json({ error: "Authorization token required" })
    }

    // token looks like this , its a string "Bearer der0123.123p918451.123123"
    // splitting bearer and the actual token with whitespace into an array
    const token = authorization.split(" ")[1]

    try {

       const {_id} = jwt.verify(token, process.env.SECRET);

       req.user = await User.findOne({ _id }).select("_id");
       next();

    } catch (error) {
        console.log(error)
        res.status(401).json({ error: "Request is not authorized" })
    }

}

module.exports = requireAuth