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

router.post('/login',(req,res)=>{
  console.log(req.body)
  const userName= req.body.Email;
  const Pass=req.body.Password;

  conn.connect().then((response) => {
console.log("test")
    if (response.connected) {
      response.request().query(`Select * from dbo.USERS where Email='${userName}' and Password='${Pass}'`, (err, result) => {
        if(!result){
          res.status(400).json({error_messaeg:"Wrong Credentials"})
        }
        res.status(200).json(result.recordset[0]);
      });
    }
  });



})









module.exports=router;
