const verifyAccessToken=require("../helpers/verifyAccessToken")

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({
        message:"Provide Token"
      });
    }
  
    const result = verifyAccessToken(token);
  
    if (!result.success) {
      return res.status(403).json({ error: result.error });
    }else{
          req.user = result.data;
    next();
    }
  
  
  }

  module.exports=authenticateToken