const router=require('express').Router()
const user=require("./user")
const tugas=require('./tugas')
const jadwal=require('./jadwal')

router.use('/user',user)
router.use('/jadwal',jadwal)
router.use('/tugas',tugas)

module.exports=router