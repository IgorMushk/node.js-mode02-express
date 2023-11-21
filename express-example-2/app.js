const express = require("express");

const books = require("./books")

const app = express();

app.get("/books", (req, res) =>{
    //const databaseREsponse = null;
    //res.send(databaseREsponse)
    //res.json(databaseREsponse)
    res.json(books);
    //res.send(books);

});

app.listen(3000, ()=> console.log("Server running"));