const express=require('express')

const router=express.Router();
const updateTask=require('../controlers/updateTask')



router.get('/:id',updateTask)

module.exports=router