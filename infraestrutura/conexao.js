const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ufpa2014',
    database: 'test'
})

module.exports = conexao