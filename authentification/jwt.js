const jwt=require("jsonwebtoken")
function generateToken(payload){
    return jwt.sign(payload,'sabil')
}
function verifyToken(token){
    return jwt.verify(token, 'sabil')
}
module.exports={generateToken,verifyToken}