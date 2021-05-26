const express = require("express");
const fs = require("fs");
const app = express();
let port = process.env.port || 8000;
const importData = require("./sellerdata.json");

app.get("/" , (req, res) =>{
    fs.readFile(`${__dirname}/sellerdata.json` , "utf-8" , (err, data) =>{
        console.log(data);
        const obj = JSON.parse(data);
        res.send(obj);
    });
    
   
    
});

console.log(__dirname);


app.listen(port , () =>{
    console.log(`listening to port ${port}`);
});