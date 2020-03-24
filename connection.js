import mysql from 'mysql';

var connection = mysql.createConnection({
    host: '192.232.194.4',
    user: 'drugaida_farmer',
    password: 'drugaida_farm',
    database: 'drugaida_farm'
  })

  export default connection