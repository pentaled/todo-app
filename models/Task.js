const mysql = require('mysql2/promise');

module.exports = {
    async read() {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
        
        const [rows] =  await connection.execute('SELECT * FROM todo.tasks;') //('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14])//
        return rows
    }
}
