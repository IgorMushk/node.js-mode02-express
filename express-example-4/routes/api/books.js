const express = require("express");

const books = require("../../data/books");

//-!-const app = express();
const router = express.Router(); // create 1 page for notebook

router.get("/", (req, res) => {
    res.jsom(books)
})

router.get("/:id", (req, res) => {
    res.json(books[0])
})

router.post("/:id", (req, res) => {
    res.json(books[0])
})


router.get("/:id", (req, res) => {
    res.json(books[0])
})

router.delete("/:id", (req, res) => {
    res.json(books[0])
})

module.exports = router;