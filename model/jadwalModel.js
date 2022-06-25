const{DataTypes}=require('sequelize')
const sq=require("../koneksi/koneksi")
const userModel=require("../model/userModel")

const jadwalModel=sq.define("jadwal",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    jam:{
        type:DataTypes.STRING
    },
    tanggal:{
        type:DataTypes.DATEONLY
    }
})

jadwalModel.belongsTo(userModel)
userModel.hasMany(jadwalModel)

jadwalModel.sync({alter:true})
module.exports=jadwalModel