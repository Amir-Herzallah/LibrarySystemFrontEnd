import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userInfo: any = [];
  display_image: any;

  constructor(private http:HttpClient, private toastr:ToastrService) { }

  GetUserProfile() {
    this.http.get(`https://localhost:7131/api/User/GetUserById?id=1`).subscribe((resp) => {
      this.userInfo = resp;
      console.log(this.userInfo)
    })
  }

  UpdateProfile(id: any, body: any) {
    body.profile_Img_Path = this.display_image;
    this.http.put(`https://localhost:7131/api/User/UpdateUser?id=${id}`, body).subscribe((resp) => {
      this.toastr.success("Profile updated")
    }, err => {
      this.toastr.error("something went wrong")

      console.log(err);
    })
  }

  uploadAttachment(file: FormData){
    this.http.post(`https://localhost:7131/api/User/uploadImage`, file).subscribe((resp:any) => {
      this.display_image = resp.profile_Img_Path;
    }, err => {
      this.toastr.error("Something went wrong");
    })
  }
}
