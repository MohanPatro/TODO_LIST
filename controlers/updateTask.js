const {Sequelize,sequelize,User}=require('../connection');



module.exports=updateTask=async (req,res)=>{
    try{
        const result=await User.findAll({where:{id:req.params.id}})
        console.log(result)
        res.render(__dirname+'/public/update',{'result':result})
    }
    catch(err){
        res.json({msg:err})
    }
}