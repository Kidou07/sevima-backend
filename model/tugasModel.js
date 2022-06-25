const{DataTypes}=require('sequelize')
const sq=require('../koneksi/koneksi');
const jadwalModel = require('./jadwalModel');
const userModel = require('./userModel');


const tugasModel = sq.define("tugas", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    status: {
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    tugas:{
        type:DataTypes.STRING,
    },
    keterangan:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    nilai:{
        type:DataTypes.INTEGER,
    },
    status:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
});
tugasModel.belongTo(jadwalModel)
jadwalModel.hasMany(tugasModel)

tugasModel.belongTo(userModel,{foreignKey:'updatedBy'})
userModel.hasMany(tugasModel)

module.exports=tugasModel;