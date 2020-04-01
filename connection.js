import mysql from 'mysql';

var connection = mysql.createConnection({
    host: '162.241.29.233',
    user: 'payfaube_usa1',
    password: 'P!~CNh09-+#674',
    database: 'payfaube_appz'
  })

  export default connection