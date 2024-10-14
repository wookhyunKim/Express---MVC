// 데이터베이스 연결 설정
const mysql = require("mysql2");
const dbconfig = require("./dbconfig.json");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: dbconfig["host"],
  user: dbconfig["user"],
  password: dbconfig["password"],
  database: dbconfig["database"],
  debug: false,
  multipleStatements: true, // 다중 Query possible
  waitForConnections: true,
});

// 프로미스 기반 사용을 위해 pool.promise()를 반환
module.exports = pool.promise();
