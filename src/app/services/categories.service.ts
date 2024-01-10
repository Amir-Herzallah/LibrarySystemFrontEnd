import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) { }

  category: any = [{}];

  GetAllCategories() {
    this.http.get('https://localhost:7131/api/Category/GetAllCategories').subscribe((resp: any) => {
      this.category = resp;
      this.toastr.success("Categories Loaded Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }
  
  DeleteCategory(id: number) {
    this.http.delete('https://localhost:7131/api/Category/DeleteCategory?id=' + id).subscribe((resp: any) => {
      window.location.reload();
      this.toastr.success("Category Deleted Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }
  
  CreateCategory(body: any) {
    this.http.post('https://localhost:7131/api/Category/CreateCategory', body).subscribe((resp: any) => {
      window.location.reload();  
      this.toastr.success("Category Created Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }

  display_image: any;
  UpdateCategory(id:any, body: any) {
    body.image_Path1 = this.display_image;        
    this.http.put('https://localhost:7131/api/Category/UpdateCategory?id='+ id ,body).subscribe((resp: any) => {
      window.location.reload();
      this.toastr.success("Category Updated Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }
  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:7131/api/AboutUsPage/uploadImage', file).subscribe((resp: any) => {
      this.display_image = resp.image_Path1;
      this.toastr.success("Image Uploaded Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }

  uploadImage(file: any) {
    if (file.length === 0)
      return;

    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.uploadAttachment(formData);
  }
}
