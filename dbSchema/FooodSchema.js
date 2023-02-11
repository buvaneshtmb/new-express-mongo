const mongoose=require('mongoose')
const validator=require('validator')

const foodSchema=new mongoose.Schema({
    name:{String},
    price:{Number},
    createdAt:{type:Date,default:Date.now()}
},
{
    collection:"food",
    versionKey:false
})

const footModel=mongoose.model('food',foodSchema)
module.exports={footModel}