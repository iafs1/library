let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  newBook = {
    author: author,
    title: title,
    pages: pages,
    read: read
  } 
  myLibrary.push(newBook)
}

const addBookButton = document.querySelector(".addBookButton") 
addBookButton.addEventListener("click", () => {
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  addBookToLibrary(author, title, pages, read);
})

