const mongoose=require('mongoose')
const validator=require('validator')

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,

        },
    gender:{
        type:String,
        required:true  
    },
    dob:{
        type:Date,
        required:true

    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

})

const Student=new mongoose.model('Student',studentSchema)
module.exports=Student;