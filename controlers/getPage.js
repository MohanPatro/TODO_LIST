const {Sequelize,sequelize,User}=require('../connection');


module.exports=getpage=(req,res)=>{
    const result=User.findAll()
    result.then((data)=>{res.render(__dirname+"/public/todo",{tasks:data})})
   
  }
