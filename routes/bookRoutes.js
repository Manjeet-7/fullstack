
const router = require("express").Router()
const {bookFetch,postBook,deleteBook,singleBookFetch,editBook} = require("../controller/bookController")

router.route("/books").get(bookFetch).post(postBook).delete(deleteBook)

router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleBookFetch)

module.exports = router 

