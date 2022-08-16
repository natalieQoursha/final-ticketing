const express = require("express");
const router = express.Router();
const DBconf = require("../../db");
const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool(DBconf);


router.post("/sorting", (req, response) => {

  conn.connect().then((res) => {
    const sortBy = req.body.sortBasedOn;
    const com=req.body.companyID;
    console.log(sortBy)
      if (res.connected) {
        if (com == 1) {
          res.request().query(`SELECT * FROM dbo.Tickets ORDER BY '${sortBy}' DESC`, (err, res) => {
            response.status(200).json(res.recordset);
          });
        } 
        else if (com == 2) {
          res
            .request()
            .query(`SELECT * FROM dbo.Tickets where Company_ID=2 ORDER BY '${sortBy}' DESC `, (err, res) => {
              response.status(200).json(res.recordset);
            });
        } else if (com == 3) {
          res
            .request()
            .query(`SELECT * FROM dbo.Tickets where Company_ID=3 ORDER BY '${sortBy}' DESC `, (err, res) => {
              response.status(200).json(res.recordset);
            });
        }
      }

    
  });
});

router.post("/sortingASC", (req, response) => {

  conn.connect().then((res) => {
    const sortBy = req.body.sortBasedOn;
    const com=req.body.companyID;
    console.log(sortBy)
    if (res.connected) {
      if (com == 1) {
        res.request().query(`SELECT * FROM dbo.Tickets ORDER BY '${sortBy}' ASC`, (err, res) => {
          response.status(200).json(res.recordset);
        });
      } 
      else if (com == 2) {
        res
          .request()
          .query(`SELECT * FROM dbo.Tickets where Company_ID=2 ORDER BY '${sortBy}' ASC `, (err, res) => {
            response.status(200).json(res.recordset);
          });
      } else if (com == 3) {
        res
          .request()
          .query(`SELECT * FROM dbo.Tickets where Company_ID=3 ORDER BY '${sortBy}' ASC `, (err, res) => {
            response.status(200).json(res.recordset);
          });
      }
    }

  });
});




router.post("/view-tickets", (req, response) => {
  const CompanyID = req.body.Company_ID;
  conn.connect().then((res) => {
    if (res.connected) {
      if (CompanyID == 10) {
        res.request().query("Select * from dbo.Tickets", (err, res) => {
          response.status(200).json(res.recordset);
        });
      } 
      else if (CompanyID == 11) {
        res
          .request()
          .query("Select * from dbo.Tickets where Company_ID=11", (err, res) => {
            response.status(200).json(res.recordset);
          });
      } else if (CompanyID == 12) {
        res
          .request()
          .query("Select * from dbo.Tickets where Company_ID=12", (err, res) => {
            response.status(200).json(res.recordset);
          });
      }
      else if (CompanyID == 13) {
        res
          .request()
          .query("Select * from dbo.Tickets where Company_ID=13", (err, res) => {
            response.status(200).json(res.recordset);
          });
      }
      else if (CompanyID == 15) {
        res
          .request()
          .query("Select * from dbo.Tickets where Company_ID=15", (err, res) => {
            response.status(200).json(res.recordset);
          });
      }
    }
  });
});

router.post("/all-tickets", (req, response) => {
  console.log(req.body);
  const PT = req.body.Product_Types;
  const TT = req.body.Ticket_Type;
  const Status = req.body.Status;
  const severity = req.body.Sevirity;
  const userid = req.body.User_ID;
  const Created_ON = req.body.CreatedOn;
  const ID = req.body.Company_ID;
  const description = req.body.Description;
  console.log("user id is:" + userid + " company id is: " + ID);
  console.log("PT IS " + PT + " TT IS " + TT);
  console.log("Status is " + Status + "severity is " + severity);
  console.log("Created on " + Created_ON);

  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `INSERT INTO dbo.Tickets (Product_Types,Ticket_Type,Status,Sevirity,Company_ID,Created_ON, User_ID,Description) VALUES ('${PT}','${TT}','${Status}', '${severity}', '${ID}','${Created_ON}', '${userid}','${description}')`,
          (err, res) => {
            if(err) console.log(err.response)
            response.status(200).json();
          }
        );
    }
  });
});

router.post("/all-tickets", (req, response) => {
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

router.post("/test-update", (req, response) => {
  const status = req.body.Status;
  const ID = req.body.Ticket_ID;
  // const reply = req.body.Reply;

  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `UPDATE dbo.Tickets SET Status = '${status}'where Ticket_ID = '${ID}'`,
          (err, res) => {
            response.status(200).json();
          }
        );

    }    
  });
});


router.post("/addReply", (req, response) => {
  const reply = req.body.Reply;
  const ID = req.body.Ticket_ID;
  console.log("reply:"+reply)

  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query(
          `UPDATE dbo.Tickets SET Reply = '${reply}'where Ticket_ID = '${ID}'`,
          (err, res) => {
            response.status(200).json();
          }
        );

    }    
  });
});
module.exports = router;
