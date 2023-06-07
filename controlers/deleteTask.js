const {Sequelize,sequelize,User}=require('../connection');



module.exports=deleteTask=async (req,res)=>{
    try{

        const {id:taskId}=req.params;
        const task=await User.destroy({where:{id:taskId}})

        if(!task){
            return res.status(404).json({msg:`no task with the id ${taskId}`})
        }

        res.send({task})
    }

    catch(err){
        res.json({msg:err})
    }
}
