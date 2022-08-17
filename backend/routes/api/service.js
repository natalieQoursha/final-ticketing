const express = require("express");
const router = express.Router();
const DBconf = require("../../db");
const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool(DBconf);

router.post("/addService", (req, response) => {
  const PID = req.body.ProductID;
  const PNAME = req.body.ProductName;
  const comName=req.body.companyName;
  const comID=req.body.companyID;
  const isactive=1;
  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `INSERT INTO dbo.Services (Company_ID,Product_ID,IsActive,Company_Name,Product_Name) VALUES 
          ('${comID}','${PID}','${isactive}','${comName}','${PNAME}')`,
          (err, res) => {
            response.status(200).json(res.recordset);
            console.log(res.recordset);
          }
        );
    }
  });
});

router.post("/removeService", (req, response) => {
  const serviceid = req.body.serviceID;
  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `DELETE FROM dbo.Services where Service_ID = ('${serviceid}')`,
          (err, res) => {
            response.status(200).json(res.recordset);
            console.log(res.recordset);
          }
        );
    }
  });
});

router.post("/assignTickets", (req, response) => {
  const ID = req.body.TicketID;
  const empID = req.body.empID;
  const name=req.body.empName;

  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `INSERT INTO dbo.Assignment(Ticket_ID,Employer_ID,Employer_Name) VALUES 
          ('${ID}','${empID}','${name}')`
          ,
          (err, res) => {
            response.status(200).json(res.recordset);
            console.log(res.recordset);
          }
        );
    }
  });
});

router.post("/view-service", (req, response) => {
  const CompanyID = req.body.Company_ID;
  console.log("hello " + CompanyID);

  conn.connect().then((res) => {
    if (res.connected) {
      if (CompanyID == 11) {
        res
          .request()
          .query(
            "Select Services.Product_Name from dbo.Services where Company_ID=11",
            (err, res) => {
              response.status(200).json(res.recordset);
              console.log(res.recordset);
            }
          );
      } else if (CompanyID == 12) {
        res
          .request()
          .query(
            "Select Services.Product_Name from dbo.Services where Company_ID=12",
            (err, res) => {
              response.status(200).json(res.recordset);
            }
          );
      } else if (CompanyID == 13) {
        res
          .request()
          .query(
            "Select Services.Product_Name from dbo.Services where Company_ID=13",
            (err, res) => {
              response.status(200).json(res.recordset);
            }
          );
      } else if (CompanyID == 15) {
        res
          .request()
          .query(
            "Select Services.Product_Name from dbo.Services where Company_ID=15",
            (err, res) => {
              response.status(200).json(res.recordset);
            }
          );
      } else if (CompanyID == 16) {
        res
          .request()
          .query(
            "Select Services.Product_Name from dbo.Services where Company_ID=16",
            (err, res) => {
              response.status(200).json(res.recordset);
            }
          );
      } else if (CompanyID == 17) {
        res
          .request()
          .query(
            "Select Services.Product_Name from dbo.Services where Company_ID=17",
            (err, res) => {
              response.status(200).json(res.recordset);
            }
          );
      }
    }
  });
});

module.exports = router;
