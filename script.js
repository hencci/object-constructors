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