const express = require('express');
const router=express.Router();
const DBconf=require('../../db');
const sql = require('mssql/msnodesqlv8');

const conn=new sql.ConnectionPool(DBconf);



router.get('/all-tickets',(req,response)=>{
    conn.connect().then((res) => {
        if (res.connected) {
          res.request().query("Select * from dbo.Tickets", (err, res) => {
            response.status(200).json(res.recordset);
          });
        }
      });
})

router.post('/all-tickets',(req,response)=>{
  console.log(req.body)
  const PT= req.body.Product_Types;
  const TT=req.body.Ticket_Type;
  const Status=req.body.Status;
  const severity=req.body.Sevirity;
  const ID=11;
  const Created_ON=2022-10-10;

  conn.connect().then((res) => {

    if (res.connected) {
      res.request().query(`INSERT INTO dbo.Tickets (Product_Types,Ticket_Type,Status,Sevirity,User_ID,Created_ON) VALUES ('${PT}','${TT}','${Status}', '${severity}', '${ID}','${Created_ON}')`, (err, res) => {
        response.status(200).json();
      });
    }
  });



})


module.exports=router;