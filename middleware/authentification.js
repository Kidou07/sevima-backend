const{verifyToken}=require("../helper/jwt")
const user=require("../model/userModel")

function authentification(req,res,next){
    const decode= verifyToken(req.headers.token)
    user.findAll({
        where:{
            id:decode.id,
            password:decode.password
        }
    }).then(data=>{
        if(data.length){
            req.dataUser=decode
            next()
        }
        else{
            res.json({status: 400})
        }
    }).catch(err=>{
        next(err)
    })
}
module.exports=authentification