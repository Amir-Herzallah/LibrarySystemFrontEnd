import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  testimonial:any=[{}];
  constructor(private http:HttpClient,private toastr: ToastrService) { }
  CreateTestimonial(body:any){
    this.http.post('https://localhost:7131/api/Testimonial/CreateTestimonial',body)
    .subscribe((resp:any)=>
    {
      this.toastr.success("Your feedback has been submitted successfully.");
      this.testimonial=resp;
    },err=>{
      this.toastr.error("The submission of your feedback was unsuccessful.");
    }
    )
  }
}