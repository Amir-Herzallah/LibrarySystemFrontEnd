import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }
  bookInfo: any;
  userInfo: any;
  borrowedInfo: any;


  SendEmail(body: any) {
    this.http.post(`https://localhost:7131/api/Email`, body).subscribe(resp => {
      console.log("email sent");
    }, err  => {
      console.log(err);

    })
  }
}
