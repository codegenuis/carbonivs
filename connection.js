import mysql from 'mysql';

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'charles',
    password: 'nerd_5020',
    database: 'farmpro'
  })

  export default connection