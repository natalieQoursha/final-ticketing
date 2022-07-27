const express = require('express');
const router=express.Router();
const DBconf=require('../../db');
const sql = require('mssql/msnodesqlv8');

const conn=new sql.ConnectionPool(DBconf);

router.get('/all-users',(req,response)=>{
    conn.connect().then((res) => {
        if (res.connected) {
          res.request().query("Select * from dbo.Users", (err, res) => {
            response.status(200).json(res.recordset);
          });
        }
      });
})


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
        localStorage.setItem("First_Name", result.recordset[0].First_Name);
        localStorage.setItem("Last_Name", result.recordset[0].Last_Name);

      });
    }
  });



})









module.exports=router;