const mysql = require("mysql2");
const dbconfig = require("./config/config.json");

const pool = mysql
  .createPool({
    connectionLimit: 50,
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database,
    debug: false,
  })
  .promise();

async function connectToDatabase() {
  try {
    await pool.query("SELECT 1");
    console.log("데이터베이스 연결 성공");
  } catch (err) {
    console.error("데이터베이스 연결 실패:", err);
  }
}

module.exports = {
  pool,
  connectToDatabase,
};
