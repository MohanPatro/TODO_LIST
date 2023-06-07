const express=require('express')

const router=express.Router();
const completed=require('../controlers/completedTask')



router.get('/completed/:id',completed)

module.exports=router