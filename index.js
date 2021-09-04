const express = require('express')
const Task = require('./models/Tasks')
const mockData = require('./mock-data.json')
const app = express()
require('dotenv').config()

app.listen(3000);
app.set('view engine', 'ejs');
app.use('/assets', express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
	const results = await Task.read()
	res.render('home', { tasks: results });
});
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