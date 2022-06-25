const {DataTypes}=require('sequelize')
const sq=require("../koneksi/koneksi")

const userModel=sq.define("userModel",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nama:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    password:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    jabatan:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    noTelp:{
        type:DataTypes.STRING
    },
    kelamin:{
        type:DataTypes.STRING,
        defaultValue:""
    }

})
module.exports=userModel;