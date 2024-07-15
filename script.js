const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let readStatus = this.read? "read" : "not read yet"
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`

    };
}


let bookContainer = document.querySelector(".books");
let newBookBoard = document.querySelector("#new-entry");
let newBookSubmitButton = document.querySelector("button");
let newBookButton = document.querySelector(".add-new");


function addBookToLibrary() {

}


newBookSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let nameField = document.querySelector("#new-book-title");
    let authorField = document.querySelector("#new-book-author");
    let pagesField = document.querySelector("#new-book-pages");
    let read = document.querySelector("#read").checked;

    let isValid = true;
});