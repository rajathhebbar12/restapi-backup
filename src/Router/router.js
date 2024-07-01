const express=require('express')
const student=require('../models/students');
require('../db/conn');
const router=new express.Router()

router.get("/student",(req,res)=>{
    res.render('student')
})
router.post("/student",async(req, res)=>{
    try{
        console.log('error here?')
        const user= new student({
            name:req.body.fullname,
            email:req.body.email,
            gender:req.body.gender,
            dob:req.body.date,
            phone:req.body.phone,
            address:req.body.address
        })
        
        if(user){
        await user.save();
        
        res.status(200).json(req.body);
        }
    }
    catch(e){
        console.log("Error");
        res.status(400).send(e)
    }
})
router.get("/record",async(req,res)=>{
    try{
        const studentData=await student.find({})
        if(studentData.length==0){
            console.log('No records')
            res.status(404)
        }
        res.json(studentData);
    }catch(e){
        res.send(e)
    }
})
router.get("*",(req,res)=>{
    res.status(404).send('PAGE NOT FOUND')
})

module.exports=router;