const pg = require('pg');

const client = new pg.Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "test",
    port: 2001
})

client.connect()

module.exports = client;