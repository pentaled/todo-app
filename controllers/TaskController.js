const Task = require('../models/Task')

module.exports = {
    async showList (req, res) {
        const results = await Task.read()
	    res.render('home', { tasks: results });
    },
    async createTask (req, res) {
        if (req.body.task !== '') {
            console.log(req.body.task)
            await Task.create(req.body.task)
        }
        res.redirect('/')
    },
    async deleteTask (req, res) {
        await Task.destroy(req.params.id)
	    res.redirect('/')
    },
    async doneTask (req, res) {
        await Task.updateStatus(req.params.id)
	    res.redirect('/')
    },
    async editTask (req, res) {
        const results = await Task.getById(req.params.id)
        if(results.length === 1) {
            res.render('edit', { data: results[0] });
        } else {
            res.render('edit', { data: {} });
        }
    },
    async saveTask (req, res) {
        if (req.body.task !== '') {
            await Task.updateTask(req.body.id, req.body.task)
        }
        res.redirect('/');
    },
    async filterTask (req, res) {
        const results = await Task.read()
	    res.render('filter', { tasks: results });
    }
}
