import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  aboutUsSliders: any = [];
  display_image: any;

  constructor(private http:HttpClient, private toastr:ToastrService) { }
  
  GetAllAboutUsPageData(): void {
    this.http.get("https://localhost:7131/api/AboutUsPage/GetAllAboutUsPageData").subscribe(resp => {
      this.aboutUsSliders = resp;
      console.log(resp);
    }, err  => {
      console.log(err);
    })

  } 

  UpdateAboutUsPageData(body: any): void {
    body.imagE_PATH1 = this.display_image;
    console.log(body);
    this.http.put("https://localhost:7131/api/AboutUsPage/UpdateAboutUsPageData", body).subscribe(resp => {
      console.log(resp);
      this.toastr.success("Updated")
    }, err => {
      console.log(err);
      this.toastr.error("Somethong went wrong")

    })

  }

  CreateAboutUsPageData(body: any) {
    body.imagE_PATH1 = this.display_image;
    console.log(body);
    this.http.post("https://localhost:7131/api/AboutUsPage/CreateAboutUsPageData", body).subscribe(resp => {
      console.log(resp);
      this.toastr.success("Created")
    }, err => {
      console.log(err);
      this.toastr.error("Somethong went wrong")

    })

  }

    DeleteAboutUsPageData(id: Number){
      this.http.delete(`https://localhost:7131/api/AboutUsPage/DeleteAboutUsPageData/${id}`).subscribe(resp => {
      console.log(resp);
      this.toastr.success("Deleted")
    }, err => {
      console.log(err);
      this.toastr.error("Somethong went wrong")

    })
    }

  uploadAttachment(file: FormData){
    this.http.post(`https://localhost:7131/api/AboutUsPage/uploadImage`, file).subscribe((resp:any) => {
      this.display_image = resp.imagE_PATH1;
    }, err => {
      this.toastr.error("Something went wrong");
    })
  }
}
