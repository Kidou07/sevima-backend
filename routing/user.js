const router=require('express').Router()
const userController=require('../controller/userController')
const authentification=require('../middleware/authentification')
const authorization=require("../middleware/authorization")

router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/view',authentification,authorization,userController.view)
router.get('/viewGuru',authentification,userController.viewGuru)
router.get('/delete',authentification,authorization,userController.delete)
router.get('/profile/:id',authentification,authorization,userController.profile)
router.get('/account',authentification,userController.account)
router.post('/update',authentification,userController.update)
router.post('/delete/:id',authentification,authorization,userController.delete)

module.exports=router