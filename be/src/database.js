import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "testRedux",
  password: "",
});

export default db;
