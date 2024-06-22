require("dotenv").config()
const jwt=require("jsonwebtoken") 

function verifyAccessToken(token) {
    const secret = process.env.PRIVATE_KEY;
  
    try {
      const decoded = jwt.verify(token, secret);
      return { success: true, data: decoded };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  module.exports=verifyAccessToken