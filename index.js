const express = require('express')
const Task = require('./models/Task')
const TaskController = require('./controllers/TaskController')
const app = express()
require('dotenv').config()

app.listen(3000);
app.set('view engine', 'ejs');
app.use('/assets', express.static('public'))
app.use(express.urlencoded({ extended: true }))
// get use querry //
app.get('/', TaskController.showList);
// post use body //
app.post('/task/create', TaskController.createTask);

app.get('/task/delete/:id', TaskController.deleteTask);

app.get('/task/done/:id', TaskController.doneTask);

app.get('/task/edit/:id', TaskController.editTask);

app.post('/task/edit/', TaskController.saveTask);