const pg=require('pg')
const {Sequelize}=require('sequelize')
const sequelize=new Sequelize('web','postgres','sabil122',{
    dialectModule:pg,
    host:'localhost',
    port:5432,
    dialect:'postgres',
    logging:false
});

module.exports=sequelize;