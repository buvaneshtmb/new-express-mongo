var express = require('express');
const mongoose=require('mongoose')
var router = express.Router();
const { mongodb,dbUrl } = require("./../config/dbConfig");
const {userModel}=require('./../dbSchema/UsersSchema')
const {footModel}=require('./../dbSchema/FooodSchema')
mongoose.connect(dbUrl)


//Using Mongoose Connection
router.get('/', async(req, res)=> {
  try {
    let users=await userModel.find({},{_id:0,__v:0})
    res.status(200).send({data:users})
  } catch (error) {
    res.status(500).send({message: "Internal Server Error",error})
  }
});

router.get('/:id', async(req, res)=> {
  try {
    let user=await userModel.findById({_id:req.params.id},{_id:0,__v:0})
    res.status(200).send({data:users})
  } catch (error) {
    res.status(500).send({message: "Internal Server Error",error})
  }
});



router.post('/',async(req,res)=>{
  try {
    let user=await userModel.findOne({email:req.body.email})
    if(!user){
      await userModel.create(req.body)
      res.status(201).send({
        message:"User Created Successful"
      })
    }
    else{
      res.status(400).send({
        message:`Email ${req.body.email} Already exists`
      })
        }
  } catch (error) {
    console.log(error)
    res.status(500).send({message: "Internal Server Error",error})
  }
})

router.put('/:id',async(req,res)=>{
  try {
    let user=await userModel.findById({_id:req.params.id})
    if(user){
      await userModel.updateOne({_id:req.params.id},req.body,{runValidators:true})
      res.status(200).send({
        message:"User Edited Successful"
      })
    }
    else{
      res.status(404).send({
        message:`User is Not Found`
      })
        }
  } catch (error) {
    console.log(error)
    res.status(500).send({message: "Internal Server Error",error})
  }
})

router.delete('/:id',async(req,res)=>{
  try {
    let user=await userModel.findById({_id:req.params.id})
    if(user){
      await userModel.deleteOne({_id:req.params.id})
      res.status(200).send({
        message:"User Deleted Successful"
      })
    }
    else{
      res.status(404).send({
        message:`User is Not Found`
      })
        }
  } catch (error) {
    console.log(error)
    res.status(500).send({message: "Internal Server Error",error})
  }
})

module.exports = router;
