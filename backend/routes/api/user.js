const express = require("express");
const router = express.Router();
const DBconf = require("../../db");
const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool(DBconf);

router.get("/all-users", (req, response) => {
  conn.connect().then((res) => {
    if (res.connected) {
      res.request().query("Select * from dbo.Users", (err, res) => {
        response.status(200).json(res.recordset);
      });
    }
  });
});

router.post("/signup", (req, response) => {
  console.log(req.body);
  const FN = req.body.First_Name;
  const LN = req.body.Last_Name;
  const mail = req.body.Email;
  const pass = req.body.Password;
  const role = req.body.Role;
  const companyID = req.body.Company_ID;
  conn.connect().then((res) => {
    if (res.connected) {
      console.log("connecteddd to db");
      res.request().query(
        `INSERT INTO [dbo].[Users]
          ([Email]
          ,[Password]
          ,[First_Name]
          ,[Last_Name]
          ,[Role]
          ,[Company_ID])
    VALUES
          ('${mail}'
          ,'${pass}'
          ,'${FN}'
          ,'${LN}'
          ,'${role}'
          ,${companyID})`,
        (err, res) => {
          response.status(200).send();
        }
      );
    }
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  const userName = req.body.Email;
  const Pass = req.body.Password;
  conn.connect().then((response) => {
    console.log("test");
    if (response.connected) {
      response.request().query(
        `Select Companies.Company_ID,Companies.Company_Name, Users.Email,Users.First_Name,Users.Last_Name,Users.Password,Users.Role,Users.ID from dbo.USERS  
      Inner JOIN Companies ON Users.Company_ID=Companies.Company_ID and Email='${userName}' and Password='${Pass}' `,
        (err, result) => {
          if (!result) {
            res.status(400).send("Wrong Credintials");
          }
          res.status(200).json(result.recordset[0]);
        }
      );
    }
  });
});

router.post("/view-employees", (req, response) => {
  conn.connect().then((res) => {
    if (res.connected) {
      res
        .request()
        .query("Select * from dbo.Users where Role='Employer'", (err, res) => {
          response.status(200).json(res.recordset);
        });
    }
  });
});

module.exports = router;
