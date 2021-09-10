const express = require('express')
const Task = require('./models/Task')
const mockData = require('./mock-data.json')
const app = express()
require('dotenv').config()

app.listen(3000);
app.set('view engine', 'ejs');
app.use('/assets', express.static('public'))
app.use(express.urlencoded({ extended: true }))
// get use querry //
app.get('/', async (req, res) => {
	const results = await Task.read()
	res.render('home', { tasks: results });
});
// post use body //
app.post('/task/create', async (req, res) => {
	if (req.body.task !== '') {
		console.log(req.body.task)
		await Task.create(req.body.task)
	}
	res.redirect('/')
});

app.get('/task/delete/:id', async (req, res) => {
	await Task.destroy(req.params.id)
	res.redirect('/')
});

app.get('/task/done/:id', async (req, res) => {
	await Task.done(req.params.id)
	res.redirect('/')
});
