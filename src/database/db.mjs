import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  database: 'apicarros',
  host: 'localhost',
  password: 'admin',
  port: 3306,
  user: 'root',
});

export default connection;
