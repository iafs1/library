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
  
  const div = document.createElement("div");
  document.body.appendChild(div);

  const authorText = document.createElement("p");
  authorText.innerText = `Author: ${author}`;
  div.appendChild(authorText);

  const titleText = document.createElement("p");
  titleText.innerText = `Title: ${title}`;
  div.appendChild(titleText);

  const pagesText = document.createElement("p");
  pagesText.innerText = `Pages: ${pages}`;
  div.appendChild(pagesText);

  const readText = document.createElement("p");
  if (read) {readText.innerText = `Read: Yes`} else {readText.innerText = `Read: No`};
  div.appendChild(readText);
})
