import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userInfo: any;
  localData: any;
  display_image: any;

  constructor(private http:HttpClient, private toastr:ToastrService) {
    this.localData = localStorage.getItem("user");
    this.localData = JSON.parse(this.localData);
   }

  GetUserProfile() {
    console.log(this.localData.roleID);
    this.http.get(`https://localhost:7131/api/User/GetUserById?id=${this.localData.roleID}`).subscribe((resp) => {
      this.userInfo = resp;
      console.log(this.userInfo)
    })
  }

  UpdateProfile(body: any) {
    console.log(this.localData.roleID);
    body.profile_Img_Path = this.display_image;
    this.http.put(`https://localhost:7131/api/User/UpdateUser?id=${this.localData.roleID}`, body).subscribe((resp) => {
      this.toastr.success("Profile updated")
    }, err => {
      this.toastr.error("something went wrong")

      console.log(err);
    })

    window.location.reload();
  }

  uploadAttachment(file: FormData){
    this.http.post(`https://localhost:7131/api/User/uploadImage`, file).subscribe((resp:any) => {
      this.display_image = resp.profile_Img_Path;
    }, err => {
      this.toastr.error("Something went wrong");
    })
  }
}
