const express = require("express");
const router = express.Router();
const DBconf = require("../../db");
const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool(DBconf);

router.post("/admin-cards", (req, response) => {
  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          "Select * from dbo.Companies where Company_ID!=10",
          (err, res) => {
            response.status(200).json(res.recordset);
          }
        );
    }
  });
});

router.post("/admin-services", (req, response) => {
  const com = req.body.companyID;
  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `Select * from dbo.Services where Company_ID = '${com}'`,
          (err, res) => {
            response.status(200).json(res.recordset);
            console.log(res.recordset)
          }
        );
    }
  });
});

router.post("/available-services", (req, response) => {
  const com = req.body.companyID;
  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `Select * from dbo.Products where Product_ID not in (Select Product_ID from dbo.Services where Company_ID = '${com}')`,
          (err, res) => {
            response.status(200).json(res.recordset);
          }
        );
    }
  });
});

module.exports = router;
