const express = require("express");
const router = express.Router();
const DBconf = require("../../db");
const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool(DBconf);

router.post("/view-service", (req, response) => {
  const CompanyID= req.body.Company_ID;
  console.log("hello "+CompanyID)


  conn.connect().then((res) => {
    if (res.connected) {
      if(CompanyID==2){
        res.request().query("Select Services.Product_Name from dbo.Services where Company_ID=2", (err, res) => {
          response.status(200).json(res.recordset);
          console.log(res.recordset)
        });
      }
      else if(CompanyID==3){
        res.request().query("Select Services.Product_Name from dbo.Services where Company_ID=3", (err, res) => {
          response.status(200).json(res.recordset);
        });
      }

      else if(CompanyID==5){
        res.request().query("Select Services.Product_Name from dbo.Services where Company_ID=5", (err, res) => {
          response.status(200).json(res.recordset);
        });
      }

      else if(CompanyID==6){
        res.request().query("Select Services.Product_Name from dbo.Services where Company_ID=6", (err, res) => {
          response.status(200).json(res.recordset);
        });
      }
  

    }
  });
});



module.exports = router;
