const Task = require('../models/Tasks')

module.exports = {
    async showList (req, res) {
        const results = await Task.read()
        res.render('home', { tasks: results });
    }
}