import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) { }

  users: any = [{}];
  numOfRegisterUsers:any;
  usersWithRervations:any;
  GetAllUsers() {
    this.http.get('https://localhost:7131/api/User/GetAllUsers').subscribe((resp: any) => {
      this.users = resp;
      this.toastr.success("Users Loaded Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }

  DeleteUser(id: number) {
    this.http.delete('https://localhost:7131/api/User/DeleteUser?id=' + id).subscribe((resp: any) => {
      window.location.reload();
      this.toastr.success("User Deleted Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }

  CreateUser(body: any) {
    body.profile_Img_Path=this.display_image;
    this.http.post('https://localhost:7131/api/User/CreateUser', body).subscribe((resp: any) => {
      window.location.reload();
      this.toastr.success("User Created Successfully");
    },
      (error: any) => {
        error.status;
        this.toastr.error("Error Occured");
      })
  }

 
  UpdateUser(id:any, body: any) {
    body.profile_Img_Path=this.display_image;
     
    this.http.put('https://localhost:7131/api/User/UpdateUser?id='+ id ,body).subscribe((resp: any) => {
      window.location.reload();
      this.toastr.success("User Updated Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }
  display_image: any;
  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:7131/api/User/uploadImage', file).subscribe((resp: any) => {
      this.display_image = resp.profile_Img_Path;
      this.toastr.success("Image Uploaded Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }
/* 
  uploadImage(file: any) {
    if (file.length === 0)
      return;

    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.uploadAttachment(formData);
  } */
  GetNumberOfRegisteredUsers(){
    this.http.get("https://localhost:7131/api/User/NumberOfRegisteredUsers").subscribe((resp)=>{
      this.numOfRegisterUsers = resp;
    },err=>{ 
      console.log(err.message);
      console.log(err.status);
     
    })
  }

  GetUsersWithReservations(){
  return  this.http.get("https://localhost:7131/api/User/GetUsersWithReservations");
  
  }
}
