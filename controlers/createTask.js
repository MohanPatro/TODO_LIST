const {Sequelize,sequelize,User}=require('../connection');


module.exports=createTask=async (req,res)=>{
    try{
        const task=await User.create(req.body)
        console.log("success")
        res.redirect("/")


        // console.log("success")
        // res.send("what happend")
    }

    catch(err){
        console.log("error ocurred")
        res.status(500).json({msg:err})
    }
    
}