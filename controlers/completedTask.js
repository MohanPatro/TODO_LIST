const {Sequelize,sequelize,User}=require('../connection');


module.exports=completed=async (req,res)=>{
    try{
        console.log(req.params.id)
        const check=await User.findOne({where:{id:req.params.id}})
        if(check.done)
        {
            const result=await User.update({done:0},{where:{id:req.params.id}})
        console.log(result)
        
        return res.redirect('/api/v1/tasks')
        }
        
        const result=await User.update({done:1},{where:{id:req.params.id}})
        console.log(result)
        
        res.redirect('/api/v1/tasks')
    }
    catch(err){
        res.json({msg:err})
    }
}
