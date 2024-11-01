import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  bookTitle: string = '';
  bookAuthor: string = '';
  books: any[] = []; // Stores the list of books to be displayed

  ngOnInit() {
    // Load books from localStorage on component initialization
    this.refreshBookList();
  }

  // Generate a unique ID for each book
  generateId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  // 1. Add a book to localStorage
  addBook() {
    if (this.bookTitle.trim() && this.bookAuthor.trim()) {  // Ensure inputs are not empty
      const newBook = { id: this.generateId(), title: this.bookTitle, author: this.bookAuthor };
      let books = this.retrieveBooks();

      books.push(newBook);  // Add the new book to the list

      // Save updated list to localStorage
      localStorage.setItem('books', JSON.stringify(books));

      // Clear input fields
      this.bookTitle = '';
      this.bookAuthor = '';

      // Refresh the displayed book list
      this.refreshBookList();
    }
  }

  // 2. Retrieve all books from localStorage
  retrieveBooks(): any[] {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];  // Return list of books or an empty list
  }

  // Refresh the displayed book list
  refreshBookList() {
    this.books = this.retrieveBooks();
  }

  // 3. Delete a book from localStorage
  deleteBook(id: string) {
    let books = this.retrieveBooks();

    // Filter out the book with the given id
    books = books.filter(book => book.id !== id);

    // Update localStorage
    localStorage.setItem('books', JSON.stringify(books));

    // Refresh the displayed book list
    this.refreshBookList();
  }
}