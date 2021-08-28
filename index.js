const express = require('express')
const Task = require('./models/Tasks')
const mockData = require('./mock-data.json')
const app = express()
require('dotenv').config()

app.listen(3000);
app.set('view engine', 'ejs');
app.use('/assets', express.static('public'))

app.get('/', async (req, res) => {
	const results = await Task.read()
	res.render('home', { tasks: results });
});
