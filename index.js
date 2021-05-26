const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.port || 3000;
const importData = require("./sellerdata.json");

app.get("/" , (req, res) =>{
    fs.readFile(`${__dirname}/sellerdata.json` , "utf-8" , (err, data) =>{
        
        const obj = JSON.parse(data);
        res.send(obj);
    });
    
   
    
});




app.listen(port , () =>{
    console.log(`listening to port ${port}`);
});