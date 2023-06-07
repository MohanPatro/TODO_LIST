const express=require('express')

const router=express.Router();
const showUpdatedTasks=require('../controlers/showUpdatedTasks')

router.post('/update/:id',showUpdatedTasks)

module.exports=router