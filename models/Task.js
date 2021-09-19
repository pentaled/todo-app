const mysql = require('mysql2/promise');

module.exports = {
    async execute(query, params = []) {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
        return await connection.execute(query, params)
    },
    async read() {
        const [rows] = await this.execute('SELECT * FROM todo.tasks WHERE todo.tasks.status = (?);', ['NEW'])
        return rows
    },
    async create(task) {
        const [rows] = await this.execute('INSERT INTO todo.tasks (todo.tasks.task) values (?);', [task])
        return rows
    },
    async destroy(id) {
        const [rows] = await this.execute('DELETE FROM todo.tasks WHERE todo.tasks.id = (?);', [id])
        return rows
    },
    async updateStatus(id) {
        const [rows] = await this.execute('UPDATE todo.tasks SET todo.tasks.status = "DONE" WHERE todo.tasks.id = ?', [id])
        return rows
    },
    async getById(id) {
        const [rows] = await this.execute('SELECT * FROM todo.tasks WHERE todo.tasks.status = "NEW" AND todo.tasks.id = ?', [id])
        return rows
    },
    async updateTask(id, task) {
        const [rows] = await this.execute('UPDATE todo.tasks SET todo.tasks.task = ? WHERE todo.tasks.id = ?', [task, id])
        return rows
    },
    async filter(status) {
        const [rows] = await this.execute('SELECT * FROM todo.tasks WHERE todo.tasks.status = (?);', [status])
        return rows
    }
}

