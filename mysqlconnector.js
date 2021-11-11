var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "KOVPwh7gZl",
  password: "EpNstXzaUh",
  database: "KOVPwh7gZl"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});