const express = require("express");
const app = express();
let port = process.env.port || 8000;
const importData = require("./sellerdata.json");

app.get("/" , (req, res) =>{
    res.send(importData);
});


app.listen(port , () =>{
    console.log(`listening to port ${port}`);
});