const express = require("express");
const router = express.Router();
const DBconf = require("../../db");
const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool(DBconf);

router.post("/admin-cards", (req, response) => {

  
  conn.connect().then((res) => {
    if (res.connected) {
        res.request().query(
            "Select * from Companies ",
            (err, res) => {
              if (err) console.log(err.response);
        response.status(200).json();
            }
          );
    }
  });
});

module.exports = router;
