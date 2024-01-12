import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
 
  bookId?: number;
  borrowId?: number;
  constructor(private router: Router,public Bookservice: BookService,  private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = +params['bookId'];
      this.borrowId = +params['borrowId'];
      console.log('Book ID:', this.bookId);
      console.log('Borrow ID:', this.borrowId);

      if (this.bookId) {
        this.Bookservice.GetBookById(this.bookId);
      } else {
        console.error('Book ID is not defined');
        // Handle the error, e.g., redirect or show a message
      }
    });
  }

  navigateToFeedback() {
    if (this.bookId && this.borrowId) {
      this.router.navigate(['/BookReview', this.bookId, this.borrowId]);
    } else {
      console.error('Invalid bookId or borrowId:', this.bookId, this.borrowId);
      // Handle the error appropriately
    }
  }
  
} 