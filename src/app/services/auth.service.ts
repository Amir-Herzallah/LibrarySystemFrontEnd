import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from 'jwt-decode';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient, private toastr: ToastrService, private router: Router) { }


  Login(body: any) {

    const header = {
      "content-type": "application/json",
      "Accept": "application/json"
    } 

    const requestHeaders = {
      headers: new HttpHeaders(header)
    }

    this.http.post("https://localhost:7131/api/JWT/Auth", body, requestHeaders).subscribe((resp) =>  {
      this.toastr.success("Logged in")

      const response = {
        token: resp.toString()
      }

      localStorage.setItem("token", response.token);
      let data: any = jwtDecode(response.token);
      console.log(data);
      localStorage.setItem("user", JSON  .stringify(data));

      let userData: any = localStorage.getItem("user");
      userData = JSON.parse(userData);
      
      if(userData.roleID === "1") {
        this.router.navigate(["admin/"])
      } else {
        this.router.navigate([""])
      }
    }, (err) => {
      this.toastr.error("Something went wrong")
      console.log(err);
    })
  }

  AccessLocal() {

    /*let userDataObject: any = {
      roleID: userData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
      userid: userData["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    }

    return userDataObject;*/
  }
}
