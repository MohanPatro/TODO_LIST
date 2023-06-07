const {Sequelize,sequelize,User}=require('../connection');


module.exports=showUpdatedTasks=async (req,res)=>{
    try{
        console.log(req.params.id)
        
        const result=await User.update(req.body,{where:{id:req.params.id}})
        console.log(result)
        
        res.redirect('/api/v1/tasks')
    }
    catch(err){
        res.json({msg:err})
    }
}
