import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  constructor(private router: Router,public Bookservice: BookService,  private route: ActivatedRoute,) { }
  ngOnInit(): void {
    debugger;
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.Bookservice.GetBookById(bookId);
  }

 
}
