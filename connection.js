

const Sequelize=require('sequelize');

const sequelize=new Sequelize('sequelize','root','AMma@143',{
    dialect:'mysql'
})

const User=sequelize.define('exam',{
    id:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
   name:{
    type:Sequelize.DataTypes.STRING,
    allowNull:false,
    validate:{
        notNull:true
        
    }
    
   },
   done:{
    type:Sequelize.DataTypes.BOOLEAN,
    defaultValue:false
   }
},{
    freezeTableName:true,
    timestamps:false
});




module.exports={Sequelize,sequelize,User}