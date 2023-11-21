const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/api/books")

// const books = require("./data/books")

const app = express();

app.use(cors());

app.use("/api/books", booksRouter);

// app.get("/api/books", (req, res) => {
//     res.jsom(books)
// })

// app.get("/api/bppks/:id", (req, res) => {
//     res.json(books[0])
// })

// app.post("/api/books/:id", (req, res) => {
//     res.json(books[0])
// })


// app.get("/app/books/:id", (req, res) => {
//     res.json(books[0])
// })

// app.delete("/api/books/:id", (req, res) => {
//     res.json(books[0])
// })

app.listen(3000, ()=>console.log("Server running"));