import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  contactUsData: any = [];
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  CreateContactUsRequest(body: any) {
    this.http.post("https://localhost:7131/api/Contactus/CreateContactUsRequest", body).subscribe(resp => {
      console.log(resp);
      this.toastr.success("Sent")
    }, err  => {
      console.log(err);
      this.toastr.error("Something went wrong")

    })


  }

  GetAllContactUsPage() {
    this.http.get("https://localhost:7131/api/ContactUsPage/GetAllContactUsPageData").subscribe(resp => {
      console.log(resp);
      this.contactUsData = resp;
    }, err  => {
      console.log(err);
    })

  }

  EditContactUsPage(body: any) {
    this.http.put("https://localhost:7131/api/ContactUsPage/UpdateContactUsPageData", body).subscribe(resp => {
      console.log(resp);
      this.toastr.success("Updated")

    }, err  => {
      console.log(err);
      this.toastr.error("Something went wrong")

    })

    window.location.reload();

  }
}
