import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  testimonial:any;
  constructor(private http:HttpClient,private toastr: ToastrService) { }
  CreateTestimonial(body:any){
    this.http.post('https://localhost:7131/api/Testimonial/CreateTestimonial',body)
    .subscribe((resp:any)=>
    {
      this.testimonial=resp;
      this.toastr.success("Your feedback has been submitted successfully.");

    },err=>{
      this.toastr.error("The submission of your feedback was unsuccessful.");
    }
    )
  }
  
  testimonials:any=[{}];
  GetAllTestimonials() {
    debugger;
    this.http.get('https://localhost:7131/api/Testimonial/GetAllTestimonials').subscribe((resp: any) => {
      this.testimonials = resp;
      this.toastr.success("Testimonials Loaded Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }
}