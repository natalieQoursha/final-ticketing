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
  const FN = req.body.firstName;
  const LN = req.body.lastName;
  const mail = req.body.Email;
  const pass = req.body.Password;
  const role = req.body.Role;
  const companyID = req.body.companyID;
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
          response.status(200).json();
        }
      );
    }
  });
});

module.exports = router;
