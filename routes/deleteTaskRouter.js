const express=require('express')

const router=express.Router();
const deleteTask=require('../controlers/deleteTask')



router.delete('/:id',deleteTask)
module.exports=router