import { Component, OnInit } from '@angular/core';
import { BookReviewService } from '../services/book-review.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {
constructor(public review:BookReviewService,private route: ActivatedRoute,public bookService :BookService){}
Book:any;
ngOnInit(): void {
  const bookId = Number(this.route.snapshot.paramMap.get('id'));
  this.bookService.GetBookById(bookId);
}
CreateForm: FormGroup=new FormGroup({
  review_Text:new FormControl('Write your feedback',[Validators.required]),
  rating:new FormControl('',[Validators.required]),
  review_Date:new FormControl(new Date(),[Validators.required]),
  borrow_Id:new FormControl(this.bookService.BookDetails.borrow_Id,[Validators.required]),
  book_Id:new FormControl(this.bookService.BookDetails.id,[Validators.required]),
  user_Id:new FormControl(22,[Validators.required])
})
saveReview(){
  this.review.CreateReview(this.CreateForm.value);
}
}