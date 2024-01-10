import { Component } from '@angular/core';
import { BookReviewService } from '../services/book-review.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent {
constructor(public review:BookReviewService){}

CreateForm: FormGroup=new FormGroup({
  review_Text:new FormControl('Write your feedback',[Validators.required]),
  rating:new FormControl(0,[Validators.required]),
  review_Date:new FormControl(new Date(),[Validators.required]),
  borrow_Id:new FormControl('',[Validators.required]),
  book_Id:new FormControl('',[Validators.required]),
  user_Id:new FormControl(22,[Validators.required])
})

saveReview(){
  this.review.CreateReview(this.CreateForm.value);
}
}