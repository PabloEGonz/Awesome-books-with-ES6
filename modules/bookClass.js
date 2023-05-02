const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const formButton = document.querySelector('#submit-button');
const bookList = document.querySelector('.book-display');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = Book.getBooks() || [];
  }

  static getBooks = () => {
    const bookInfo = localStorage.getItem('books');
    if (bookInfo !== null && bookInfo !== undefined) {
      return JSON.parse(bookInfo);
    }
    return [];
  }

  addBookToList = () => {
    bookList.innerHTML = '';
    if (Array.isArray(this.books)) {
      this.books.forEach((book, i) => {
        const bookItem = document.createElement('li');
        bookItem.classList.add('book-list');
        bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove" data-index="${i}">Remove</button>`;
        bookList.appendChild(bookItem);
      });
    }
  }

  removeBookFromList = (i) => {
    this.books.splice(i, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.addBookToList();
  }

  handleFormSubmit = () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.addBookToList();
  }

  handleRemoveButtonClick = (e) => {
    if (e.target.matches('.remove')) {
      const {
        index,
      } = e.target.dataset;
      this.removeBookFromList(index);
    }
  }
}
export { formButton, bookList, Book };
