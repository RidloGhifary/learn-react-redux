import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234Ridlo",
  database: "testRedux",
});

export default db;
