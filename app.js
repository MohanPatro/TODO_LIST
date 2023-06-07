const express=require('express')

const app=express();
app.use(express.static('./controlers/public'))

const {Sequelize,sequelize,User}=require('./connection');


app.use(express.urlencoded({extended:false}))
app.use(express.json());


app.set('view engine','ejs')


const getPageRouter=require('./routes/getPageRoute')
const updateTaskRouter=require('./routes/updateTaskRouter')

const createTaskRouter=require('./routes/createTaskRouter')
const deleteTaskRouter=require('./routes/deleteTaskRouter')
const showUpdatedTasksRouter=require('./routes/showUpdatedTasksRouter')
const completedTaskRouter=require('./routes/completedTaskRouter')




app.use('/api/v1/tasks',getPageRouter)
app.use('/api/v1/tasks',createTaskRouter)
app.use('/api/v1/tasks',deleteTaskRouter)
app.use('/api/v1/tasks',updateTaskRouter)
app.use('/api/v1/tasks',showUpdatedTasksRouter)
app.use('/api/v1/tasks',completedTaskRouter)








app.listen(8000)




