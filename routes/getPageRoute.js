const express=require('express')

const router=express.Router();
const getPage=require('../controlers/getPage')

router.get('/',getPage)

module.exports=router