let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let _addBookForm = document.querySelector('#addBookForm');
let _popup = document.querySelector('#popup');
let _overlay = document.querySelector('.overlay');
function openForm() {
    _addBookForm.reset();
    error.textContent = '';
    _popup.style.display = 'grid';
    _overlay.classList.add('active')
}

function closeForm() {
    _popup.style.display = "none";
    _overlay.classList.remove('active')
}

addBookToLibrary(new Book('a', 'a', 23, true));
addBookToLibrary(new Book('b', 'a', 23, true));
addBookToLibrary(new Book('c', 'a', 23, true));

let RemoveBook = (event) => {
    let name = event.target.parentNode.firstChild.textContent;
    myLibrary = myLibrary.filter((book) => book.name !== name)
    displayBooks();
}

let _books = document.querySelector('.books');
function displayBooks() {
    _books.innerHTML = '';

    for (let book of myLibrary) {

        let card = document.createElement('div');
        card.classList.add('book');

        let name = document.createElement('div');
        name.textContent = book.name;

        let author = document.createElement('div');
        author.textContent = book.author;

        let pages = document.createElement('div');
        pages.textContent = book.pages;

        let read = document.createElement('div');
        if (book.read) {
            read.textContent = 'Read';
            card.style.backgroundColor = '#dcfce7';
        } else {
            read.textContent = 'Not read';
            card.style.backgroundColor = '#fee2e2';
        }

        let remove = document.createElement('button');
        remove.textContent = 'Remove';
        remove.classList.add('btn');
        remove.onclick = RemoveBook;
        
        card.appendChild(name);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(remove);

        _books.appendChild(card);
    }
}

displayBooks();

function addNewBook() {
    let name = document.querySelector('#name');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');
    let error = document.querySelector('#error');

    if (myLibrary.find((book) => {
        return book.name === name.value;
    })) {
        error.textContent = '*Book already exists';
        return;
    }

    addBookToLibrary(new Book(name.value, author.value, pages.value, read.checked));
    displayBooks();
    closeForm();
}