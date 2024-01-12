import { Component, OnInit } from '@angular/core';
import { BookReviewService } from '../services/book-review.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {
constructor(public review:BookReviewService,private route: ActivatedRoute,public bookService :BookService,private router: Router){
   const storedUser = localStorage.getItem('user');
const userId = storedUser ? JSON.parse(storedUser).userID : null;}
Book:any;
bookId?: number;
borrowId?: number;
readonly userId?: number | null;  

CreateForm: FormGroup=new FormGroup({
  review_Text:new FormControl('Write your feedback',[Validators.required]),
  rating:new FormControl( ''),
  review_Date:new FormControl(new Date(),[Validators.required]),
  borrow_Id:new FormControl(  '',[Validators.required]),
  book_Id:new FormControl(  '' ,[Validators.required]),
  user_Id:new FormControl(this.userId,[Validators.required])
})
ngOnInit(): void {
  this.route.params.subscribe(params => {

    this.bookId = +params['bookId'];
    this.borrowId = +params['borrowId'];
     this.CreateForm.patchValue({
      borrow_Id: this.borrowId,
      book_Id: this.bookId
    });
    if (this.bookId) {
      
      this.bookService.GetBookById(this.bookId, );
    } else {
      console.error('Book ID is not defined');
      // Handle the error, e.g., redirect or show a message
    }
  });
/*   const bookId = Number(this.route.snapshot.paramMap.get('id'));
  this.bookService.GetBookById(bookId); */
}
saveReview(){
  this.review.CreateReview(this.CreateForm.value);
}
onRatingChanged(rate: any) {  
  this.CreateForm.patchValue({
    rating: rate.detail
  });
  console.log(rate);
}
}