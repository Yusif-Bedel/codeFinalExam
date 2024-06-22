require("dotenv").config()

const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    const payload = {
      id: user.id,
      email: user.email,
      role:user.role
    };
    
    const secret =process.env.PRIVATE_KEY ;
    const options = { expiresIn: '1d' };
  
    return jwt.sign(payload, secret, options);
  }

  module.exports=generateAccessToken