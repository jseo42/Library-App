document.querySelector("#addBooks").addEventListener("submit", addBookToLibrary);
let statusColor = document.querySelector(".read-status");

let myLibrary = [];

function Book(title, name, pages, read) {
  this.title = title;
  this.name = name;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;

}
function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let catalog = document.querySelector(".storage-display");
  catalog.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.classList.add("book")
    bookElement.innerHTML = `
      <div class="book-header">
        <h2 class="book-title">${book.title}</h2>
        <h5 class="book-author">by ${book.name}</h5>
      </div>
      <div class="book-body">
        <p>Pages: ${book.pages}</p>
        <p class="read-status">${book.read ? "Completed" : "In Progress"}</p>
      </div>
      <div class="icon">
        <button id="read-btn" onclick="toggleRead(${i})">Toggle Me</button>
        <img src="icon/icons8-trash.svg" id="trashIcon" onclick="removeBook(${i})">
      </div
      
      
    `
    catalog.appendChild(bookElement);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  event.preventDefault()
  let title = document.getElementById("title").value;
  let name = document.getElementById("name").value;
  let page = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, name, page, read);
  myLibrary.push(newBook);
  render();
}



