const{DataTypes}=require('sequelize')
const sq=require('../koneksi/koneksi')


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
        type:DataTypes.INTEGER,
        defaultValue:""
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
module.exports=tugasModel;