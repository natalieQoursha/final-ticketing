const express = require("express");
const app = express();
const cors = require("cors");
const sql = require("mssql/msnodesqlv8");
const DBconf = require("./db");
const conn = new sql.ConnectionPool(DBconf);
const bodyParser = require("body-parser");


conn.connect().then((res) => {
  if (res.connected) {
    res.request().query("Select * from dbo.Tickets", (err, res) => {
      (res.recordset);
    });
  }
});

const corsConf = {
  origin: "*",
  optionSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsConf));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", require("./routes/api/user"))
app.use("/api/ticket", require("./routes/api/ticket"))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.listen(5000, () => {
  console.log("ON");
});
