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

  // 1. Προσθήκη βιβλίου στο localStorage
  addBook() {
    const newBook = { title: this.bookTitle, author: this.bookAuthor };
    let books = this.retrieveBooks();

    books.push(newBook);  // Προσθέτουμε το νέο βιβλίο στη λίστα

    // Αποθήκευση της λίστας στο localStorage
    localStorage.setItem('books', JSON.stringify(books));

    // Καθαρίζουμε τα πεδία εισαγωγής
    this.bookTitle = '';
    this.bookAuthor = '';
  }

  // 2. Ανάκτηση όλων των βιβλίων από το localStorage
  retrieveBooks() {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];  // Επιστροφή λίστας βιβλίων ή κενής λίστας
  }

  // 3. Διαγραφή βιβλίου από το localStorage
  deleteBook(index: number) {
    let books = this.retrieveBooks();

    // Αφαιρούμε το βιβλίο από τον πίνακα
    books.splice(index, 1);

    // Ενημερώνουμε το localStorage
    localStorage.setItem('books', JSON.stringify(books));
  }
}