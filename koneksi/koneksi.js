const{sequelize}=require('sequelize')
const sequelize=new sequelize('web','postgres','sabil122',{
    host:'localhost',
    port:5432,
    dialect:'postgres',
    logging:false
});

module.exports=sequelize;