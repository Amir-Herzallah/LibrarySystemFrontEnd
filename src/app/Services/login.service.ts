import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  

  Auth(data: any){
    this.http.post("https://localhost:7131/api/JWT/Auth", data).subscribe((resp) => {
      console.log(resp);
    }, err => {
      console.log(err.message);
    })
  }
}
