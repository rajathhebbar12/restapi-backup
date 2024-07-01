const express=require('express')
const app=express()
const hbs=require('hbs')
const path=require('path')
const paths=path.join(__dirname,'./views')
const jspath=path.join(__dirname,'../js/')
const router=require('./Router/router');
const port=process.env.PORT || 3000
app.set('view engine','hbs')
app.set('views',paths)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(router)



app.listen(port,()=>{
      console.log(`connection is setup at ${port}`)
})