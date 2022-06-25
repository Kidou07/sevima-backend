const bcrypt=require('../authentification/bcrypt')
const userModel=require('../model/userModel')
const jwt=require('../authentification')

class userController{
    static view(req,res){
        userModel.findAll({
        }).then(data=>{
            res.json(data)
        }).catch(err=>{
            res.json(err)
        })
    }
    static register(req,res){
        const {email , password}=req.body
        let encrypted= bcrypt.hashpassword(password)
        userModel.findAll({where:{email:email}
        }).then(data=>{
            if(data.length){
                res.json({message: "data sudah ada"})
            }
            else{
                userModel.create({
                    email:email,
                    password:encrypted,
                    nama:nama,
                    jabatan:jabatan,
                    kelamin:kelamin,
                    noTelp:noTelp
                },
                {returning:true}).then(respon=>{
                    res.status(200).json(respon)
                }).catch(err=>{
                    res.status(500).json(err)
                })
            }
        })
    }
    static login(req,res){
        const{email,password}=req.body
        userModel.findAll({where:{email:email}
        }).then(data=>{
            if(data.length){
                let hasil=bcrypt.compare(password,data[0].dataValues.password)
                if(hasil){
                    res.status(200).json([{token:jwt.generateToken(data[0].dataValues)},{id:data[0].id}])
                }
                else{
                    res.status(400).json({message: `password salah`})
                }
            }
            else{
                    res.status(400).json({message:`email tidak ditemukan`})
            }
        })
        .catch(err=>{
            res.status(500).json({message:err})
        })
    }
    static update(req,res){
        const dataId=req.dataUser.id
        const{nama,jabatan,kelamin,noTelp}=req.body
        userModel.findAll({where:{id:dataId}
        }).then(data=>{
            if(data.length){
                userModel.update({
                    nama:nama,
                    jabatan:jabatan,
                    kelamin:kelamin,
                    noTelp:noTelp,

                },{
                    where:
                    {email:email}
                },{
                    returning:true
                }
                ).then(data=>{
                    res.status(200).json({message:'berhasil di ubah'})
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
        userModel.destroy({
            where:
            {id:id}
        }).then(data=>{
            res.status(200).json({message:"berhasil di hapus"})
        }).catch(err=>{
            res.status(500).json({message:"gagal"})
        })
    } 
}
module.exports=userController;