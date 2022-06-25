const sequelize=require('sequelize');
const tugasModel=require('../model/tugasModel')
const userModel=require('../model/userModel')
const jadwalModel=require('../model/jadwalModel');
const { fn } = require('sequelize');

class tugasController{
    static tugasOrder(req,res){
        const dataId=req.dataUser.id
        const{jadwalId,tugas}=req.body
        tugasModel.findAll({
        where:{
            userModelId:userModelId,
            jadwalId:jadwalId,
            tugas:tugas
        }
        }).then(data=>{
            if(data.length){
                res.status(200).json({message:'data sudah ada'})
            }
            else{
                tugasModel.create({
                    userModelId:dataId,
                    jadwalId:jadwalId,
                    tugas:tugas,
                }).then(data=>{
                    res.status(200).json(data)
                })
            }
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
    static cekRiwayat(req,res){
        const dataId=req.dataUser.id
        tugasModel.findAll({
            where:{
                userModelId:dataId
            },
            include:[{
                model:jadwalModel,
                include:[userModel]
            }]
        }).then(data=>{
            res.json(200).json(data)
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
    static cekTugas(req,res){
        const {jadwalId}=req.params
        tugasModel.findAll({
            attributes:[
                [sequelize.fn('COUNT',sequelize.col('status')),'jumlahTugas']
            ],
            where:{
                jadwalId:jadwalId,
                status:1        
            }
        }).then(data=>{
            tugasModel.findAll({
                where:{
                    jadwalId:jadwalId
                },
                include:[{
                    model: jadwalModel,
                    include:[userModel]
                }]
            }).then(data2=>{
                data2[0].dataValues.jumlahTugas = data[0].dataValues.jumlahTugas
                res.status(200).json(data)
            })
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
    static update(req,res){
        const dataId=req.dataUser.id
        const{jadwalId, tugas}=req.body
        tugasModel.findAll({
            where:{
                userModelId:dataId
            }
        }).then(data=>{
            if(data.length){
                tugasModel.update({
                    jadwalId:jadwalId,
                    tugas:tugas
                })
            }
            else{
                res.status(400).json({message:'data tidak ada'})
            }
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
    static rubahStatus(req,res){
        const dataId=req.dataUser.id
        const{id,status,keterangan}=req.body
        tugasModel.findAll({
            where:{
                id:id
            }
        }).then(data=>{
            if(data.length){
                tugasModel.update({
                    status:status,
                    updatedBy:dataId,
                    keterangan:keterangan
                },{
                    where:{
                        id:id
                    }
                }).then(data=>{
                    res.status(200).json(data)
            })
            }
            else{
                res.status(400).json({message:'data tidak ada'})
            }
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
    static delete(req,res){
        const{id}=req.params;
        tugasModel.destroy({
            where:{
                id:id
            }
        }).then(data=>{
            res.status(200).json('sudah di hapus')
        }).catch(err=>{
            res.status(500).json('gagal')
        })
    }
}
module.exports=tugasController;