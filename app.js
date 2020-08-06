// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class:Handle UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [{
                title: 'book1',
                author: 'abc',
                isbn: '12345'
            },
            {
                title: 'book2',
                author: 'pqr',
                isbn: '12346'
            }
        ];
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList() {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}
//Store class:Handles Storage
// Event: Display Books
// Event: Add a Book
// Event: Remove a Book