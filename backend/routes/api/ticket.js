const express = require("express");
const router = express.Router();
const DBconf = require("../../db");
const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool(DBconf);

router.get("/all-tickets", (req, response) => {
  conn.connect().then((res) => {
    if (res.connected) {
      res.request().query("Select * from dbo.Tickets", (err, res) => {
        response.status(200).json(res.recordset);
      });
    }
  });
});

router.post("/all-tickets", (req, response) => {
  console.log(req.body);
  const PT = req.body.Product_Types;
  const TT = req.body.Ticket_Type;
  const stat = "Submitted";
  const severity = req.body.Sevirity;
  const ID = 11;
  const Created_ON = 2022 - 10 - 10;
  const userid = 2;

  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `INSERT INTO dbo.Tickets (Product_Types,Ticket_Type,Status,Sevirity,Company_ID,Created_ON, User_ID) VALUES ('${PT}','${TT}','${stat}', '${severity}', '${ID}','${Created_ON}', '${userid}')`,
          (err, res) => {
            response.status(200).json();
          }
        );
    }
  });
});

module.exports = router;
