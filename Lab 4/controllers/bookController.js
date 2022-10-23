const books = require("./../models/books");
const bookModel = require("./../models/books");

const getBookList = async (req, res) => {
  // console.log("data")
  let data = [];
  let books = [];
  try {
    data = await bookModel.find();
    
    data.forEach((book) => {
      books.push({ name: book.name, author: book.author, genre: book.genre });
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("bookList", { books: books });
  }
};

const getBook = (req, res) => {
  res.render("addBooks");
};

const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};

//delete books
const deleteBook = (req, res) => {
  var id = req.body.id
  bookModel
    .findByIdAndRemove(id)
    .then(() => {
      console.log("Book Deleted Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/book-list");
    });
};

module.exports = { getBookList, getBook, postBook, deleteBook };
