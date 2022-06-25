function authorization(req,res,next){
    if(req.dataUser.jabatan=="guru"){
        next()
    }
    else{
        res.status(500).json({status:"anda bukan guru"})
    }
}