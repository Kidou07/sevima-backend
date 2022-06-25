const jadwalModel = require("../model/jadwalModel");
const userModel = require("../model/userModel");

class jadwalController{
    static createJadwal(req,res){
        const{userModelId, jam, tanggal}=req.body
        jadwalModel.findAll({
            where:{
                userModelId:userModelId,
                jam:jam,
                tanggal:tanggal
            }
        }).then(data=>{
            if(data.length){
                res.status(200).json({message:'jadwal sudah ada'})
            }
            else{
                jadwalModel.create({
                    jam:jam,
                    tanggal:tanggal,
                    userModelId:userModelId
                }).then(data=>{
                    res.status(200).json(data)
                })
            }
        }).catch(err=>{
            res.status(400).json(err)
        })
    }
    static cekJadwal(req,res){
        const dataId=req.dataUser.Id
        jadwalModel.findAll({
            where:{
                userModelId:dataId
            },
            include:[{
                model:userModel
            }]
        }).then(data=>{
            res.status(200).json(data)
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
    static cekJadwalbyGuru(req,res){
        const{tanggal,userModelId}=req.body
        jadwalModel.findAll({
            where:{
                tanggal:tanggal,
                userModelId:userModelId
            },
            include:[{userModel}]
        }).then(data=>{
            res.status(200).json(data)
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
    static cekSemuaJadwal(req,res){
        jadwalModel.findAll({
            include:[{userModel}]
        }).then(data=>{
            res.status(200).json(data)
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
    static updateJadwal(req,res){
        dataId=req.dataUser.Id
        const{userModelId,jam,tanggal}=req.body
        jadwalModel.findAll({
            where:{
            id:dataId,
            }
        }).then(data=>{
            if(data.length){
                jadwalModel.update({
                    userModelId:userModelId,
                    jam:jam,
                    tanggal:tanggal
                }).then(data=>{
                    res.status(200).json(data)
                })
            }
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
    static deleteJadwal(req,res){
        const{id}=req.headers
        jadwalModel.destroy({
            where:{
                id:id
            }
        }).then(data=>{
            res.status(200).json('sudah di hapus')
        }).catch(data=>{
            res.status(500).json('gagal')
        })
    }
}
module.exports=jadwalController