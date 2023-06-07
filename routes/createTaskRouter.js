const express=require('express')

const router=express.Router();
const createTask=require('../controlers/createTask')

router.post('/',createTask)

module.exports=router