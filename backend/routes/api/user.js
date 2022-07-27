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





module.exports=router;