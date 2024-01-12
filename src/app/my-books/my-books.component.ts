import { Component } from '@angular/core';
import { BorrowedbooksService } from '../services/borrowedbooks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent {
  
  constructor(private route: ActivatedRoute, public borrowedbooks: BorrowedbooksService ,private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = +params['userId']; // '+' converts the parameter to a number
      this.borrowedbooks.GetBorrowedBooksByIdUser(userId);
    });
  }
  navigateToBookDetail(bookId: number, borrowId: number) {
    debugger;
    this.router.navigate(['/book-detail', bookId, borrowId]);
  }

  ///Details Of Book

 
}
