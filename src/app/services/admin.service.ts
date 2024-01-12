import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  //----------------------------Homepage Operations------------------

  display_image: any;
  homePageData: any = [{}]
  GetAllHomepageData() {

    this.http.get("https://localhost:7131/api/Homepage/GetAllHomePageData").subscribe((resp) => {
      this.homePageData = resp
    }, err => {
      alert("Something Went Wrong")
    })
  }

  CreateHomepage(body: any) {
    body.logO_PATH = this.display_image;
    this.http.post("https://localhost:7131/api/Homepage/CreateHomePageData", body).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('Homepage Created Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');

    })
  }

  UploadAttachment(file: FormData) {
    this.http.post('https://localhost:7131/api/Homepage/uploadImage', file)
      .subscribe((resp: any) => {
        this.display_image = resp.logO_PATH;
      }, err => {
        this.toastr.error('Something Went Wrong');
      })
  }

  DeleteHomePage(id: number) {
    this.http.delete("https://localhost:7131/api/Homepage/DeleteHomePageData/" + id).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('Homepage Deleted Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }

  UpdateHomepage(body: any) {
    this.http.put("https://localhost:7131/api/Homepage/UpdateHomePageData", body).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('Homepage Updated Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }

  //----------------------------About Us Page Operations------------------
  aboutUsPageData: any = [{}]

  GetAllAboutUsData() {
    this.http.get("https://localhost:7131/api/AboutUsPage/GetAllAboutUsPageData").subscribe((resp) => {
      this.aboutUsPageData = resp
      this.toastr.success('About us page loaded successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }

  CreateAboutUsPage(body: any) {
    body.logO_PATH = this.display_image;
    this.http.post("https://localhost:7131/api/AboutUsPage/CreateAboutUsPageData", body).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('About Us Page Created Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }

  DeleteAboutUsPage(id: number) {
    this.http.delete("https://localhost:7131/api/AboutUsPage/DeleteAboutUsPageData/" + id).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('About Us Page Deleted Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }

  UpdateAboutUsPage(body: any) {
    this.http.put("https://localhost:7131/api/AboutUsPage/UpdateAboutUsPageData", body).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('About Us Page Updated Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }
 //----------------------------Contact Us Page Operations------------------
  contactUsPageData: any = [{}]

  GetAllContactUsData() {
    this.http.get("https://localhost:7131/api/ContactUsPage/GetAllContactUsPageData").subscribe((resp) => {
      this.contactUsPageData = resp
      this.toastr.success('Contact us page loaded successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }

  CreateContactUsPage(body: any) {
    body.logO_PATH = this.display_image;
    this.http.post("https://localhost:7131/api/ContactUsPage/CreateContactUsPageData", body).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('Contact Us Page Created Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }

  DeleteContactUsPage(id: number) {
    this.http.delete("https://localhost:7131/api/ContactUsPage/DeleteContactUsPageData/" + id).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('Contact Us Page Deleted Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }

  UpdateContactUsPage(body: any) {
    this.http.put("https://localhost:7131/api/ContactUsPage/UpdateContactUsPageData", body).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('Contact Us Page Updated Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }
  //----------------------------Testimonial Page Operations------------------
  testimonialPageData: any = [{}]

  GetAllTestimonialData() {
    this.http.get("https://localhost:7131/api/TestimonialPage/GetAllTestimonialPageData").subscribe((resp) => {   
      this.testimonialPageData = resp
      this.toastr.success('Testimonial page loaded successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }

  CreateTestimonialPage(body: any) {
    body.imagePath1 = this.display_image;
    this.http.post("https://localhost:7131/api/TestimonialPage/CreateTestimonialPageData", body).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('Testimonial Page Created Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }
  DeleteTestimonialPage(id: number) {    
    this.http.delete("https://localhost:7131/api/TestimonialPage/DeleteTestimonialPageData?id=" + id).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('Testimonial Page Deleted Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }
  UpdateTestimonialPage(body: any) {
    this.http.put("https://localhost:7131/api/TestimonialPage/UpdateTestimonialPageData", body).subscribe((resp) => {
      window.location.reload();
      this.toastr.success('Testimonial Page Updated Successfully');
    }, err => {
      this.toastr.error('Something Went Wrong');
    })
  }
}