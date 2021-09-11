const express = require('express')
const Task = require('./models/Tasks')
const TaskController = require('./controllers/TaskController')
const app = express()
require('dotenv').config()

app.listen(3000);
app.set('view engine', 'ejs');
app.use('/assets', express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', TaskController.showList);
// get => res.query, post => res.body, dynamic param in the URL => req.params
app.post('/task/create', async (req, res) => {
	if(req.body.task !== '') {
		console.log(req.body.task)
		await Task.create(req.body.task)
	}
	res.redirect('/')
});

app.get('/task/delete/:id', async (req, res) => {
	await Task.destroy(req.params.id)
	res.redirect('/')
});

app.get('/task/done/:id', async(req, res) => {
    await Task.updateStatus(req.params.id)
    res.redirect('/')
})
// render edit page. 
app.get('/task/edit/:id', async(req, res) => {
	const results = await Task.getById(req.params.id)
	if(results.length === 1) {
		res.render('edit', { data: results[0] });
	} else {
		res.render('edit', { data: {} });
	}
})

// post form
app.post('/task/edit', async(req, res) => {
	if(req.body.task !== '') {
        await Task.updateTask(req.body.id, req.body.task)
    }
    res.redirect('/');
})