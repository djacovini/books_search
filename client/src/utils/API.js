import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  searchBooks: function(title) {
    return axios.post("/search", {title});
  },
  addBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function(){
    return axios.delete("/api/books/");
  }
};
