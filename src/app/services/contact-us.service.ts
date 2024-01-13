import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { timeInterval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  contactUsData: any = [];
  contactUsMessages: any = [];
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  CreateContactUsRequest(body: any) {
    this.http.post("https://localhost:7131/api/Contactus/CreateContactUsRequest", body).subscribe(resp => {
      console.log(resp);
      this.toastr.success("Sent")
    }, err => {
      console.log(err);
      this.toastr.error("Something went wrong")

    })
  }
  GetAllContactUsMessages() {
    this.http.get("https://localhost:7131/api/Contactus/GetAllContactUsRequests").subscribe(resp => {
      this.contactUsMessages = resp;
    }, err => {
      console.log(err);
    })
  }

  GetAllContactUsPage() {
    this.http.get("https://localhost:7131/api/ContactUsPage/GetAllContactUsPageData").subscribe(resp => {
      console.log(resp);
      this.contactUsData = resp;
    }, err => {
      console.log(err);
    })
  }

  DeleteMessage(id: number) {
    this.http.delete("https://localhost:7131/api/Contactus/DeleteContactUsRequest?id=" + id).subscribe(resp => {
      window.location.reload();
      this.toastr.success("Message Deleted")
    }, err => {
      this.toastr.error("Something went wrong")
    })
  }

  EditContactUsPage(body: any) {
    this.http.put("https://localhost:7131/api/ContactUsPage/UpdateContactUsPageData", body).subscribe(resp => {
      this.toastr.success("Updated")

    }, err => {
      this.toastr.error("Something went wrong")
    })

  }
}
