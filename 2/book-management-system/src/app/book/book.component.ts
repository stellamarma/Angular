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

  addBook() {
    console.log('Book added:', this.bookTitle, this.bookAuthor);
    this.bookTitle = '';
    this.bookAuthor = '';
  }
}
