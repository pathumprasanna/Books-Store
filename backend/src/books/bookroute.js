const express = require("express");
const Book = require("./bookmodel.js");
const { PostABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require("./bookcontroller.js");
const verifyAdminToken = require("../middleware/verifyAdminToken.js");
const router = express.Router();

//post a book
router.post("/create-book",verifyAdminToken,PostABook);

router.get("/",getAllBooks);

router.get("/:id",getSingleBook);

router.put("/edit/:id",verifyAdminToken,UpdateBook);

router.delete("/:id",verifyAdminToken,deleteABook);

module.exports = router;