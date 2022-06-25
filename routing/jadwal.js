const router=require('express').Router()
const jadwalController=require("../controller/jadwalController")
const authentification=require("../middleware/authentification")

router.post('/buatJadwal',jadwalController.createJadwal)
router.get('/lihatJadwal',authentification,jadwalController.cekJadwal)
router.get('/lihatSemuaJadwal',jadwalController.cekSemuaJadwal)
router.get('/updateJadwal',authentification,jadwalController.updateJadwal)
router.get('/deleteJadwal',jadwalController.deleteJadwal)
router.post('/cekJadwalByDokter',jadwalController.cekJadwalbyGuru)

module.exports=router