import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestimonialService } from '../services/testimonial.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  constructor(public testimonial:TestimonialService,
    public manageTestimonialPage:AdminService)
    {}
  
  CreateForm: FormGroup=new FormGroup({
    text:new FormControl('Write your feedback',[Validators.required]),
    status:new FormControl('Pending',[Validators.required]),
    submission_Date:new FormControl(new Date(),[Validators.required]),
    user_Id:new FormControl(22,[Validators.required])
  })
  saveFeedback(){
    this.testimonial.CreateTestimonial(this.CreateForm.value);
  }
  ngOnInit(): void {
    this.manageTestimonialPage.GetAllTestimonialData();
  }
}