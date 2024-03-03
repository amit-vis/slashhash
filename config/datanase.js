const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: "root",
    password: "",
    database: "test",
    host: "localhost"
})

if(connection){
    console.log("database connected successfully")
}

module.exports = connection