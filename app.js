const express= require('express')
const port=5432
const app= express()
const routing=require('./routing')
const cors= require('cors')
const { urlencoded } = require('express')

app.use(express,urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use('/',routing)

app.listen(port,()=>{
    console.log(`tersambung ke port`)
})