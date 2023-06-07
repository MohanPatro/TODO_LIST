
const {Sequelize,sequelize,User}=require('../connection');

module.exports=getAllTasks=async (req,res)=>{
    try{
     const tasks=await User.findAll();
 
     res.status(200).json({tasks})
    }
 
    catch(error){
         res.status(400).json({msg:err})
    }
 
 }
 