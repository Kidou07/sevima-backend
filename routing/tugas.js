const router= require('express').Router()
const tugasController=require('../controller/tugasController')
const authentification=require('../middleware/authentification')

router.post('/order',authentification, tugasController.tugasOrder)
router.get('/riwayat', authentification,tugasController.cekRiwayat)
router.get('/cekTugas/:jadwalId',authentification,tugasController.cekTugas)
router.post('/update',authentification,tugasController.update)
router.post('/rubahStatus',authentification,tugasController.rubahStatus)
router.post('/delete/:id',authentification,tugasController.delete)

module.exports=router
