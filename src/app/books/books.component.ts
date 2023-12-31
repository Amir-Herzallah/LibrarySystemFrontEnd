import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  implements OnInit{
  books : any[] = [];   
  
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      
      
      (data) => {
        debugger ;
        this.books = data; 
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

}

      