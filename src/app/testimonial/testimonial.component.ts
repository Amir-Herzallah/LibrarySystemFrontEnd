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
  // You might want to initialize userID with an appropriate default value or handle the case when it's not present in local storage
  user: any = localStorage.getItem("user");
  userID: number | null = null;
  
  constructor(public testimonial: TestimonialService, public manageTestimonialPage: AdminService) {
    if (this.user) {
      const userData = JSON.parse(this.user);
      this.userID = userData.userID;
    }
  }

  CreateForm: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.required]),
    status: new FormControl('Accepted', [Validators.required]),
    submission_Date: new FormControl(new Date(), [Validators.required]),
    user_Id: new FormControl(this.userID, [Validators.required])
  })

  saveFeedback() {
    this.testimonial.CreateTestimonial(this.CreateForm.value);
  }

  ngOnInit(): void {
    this.manageTestimonialPage.GetAllTestimonialData();
    this.testimonial.GetAllTestimonials();
  }
}
