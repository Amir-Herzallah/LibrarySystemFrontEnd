import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) { }

  
  books:any =[{}]
  topRatedBooks:any=[{}]
  allCategoriesBooks:any=[{}]
  bestSellingBook:any;
  borrowedBooks:any;
  bookInfoById:any;
  GetAllBooks() {
    this.http.get('https://localhost:7131/api/Book/GetAllBooks').subscribe((resp: any) => {
      this.books = resp;
      this.toastr.success("Books Loaded Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }
  DeleteBook(id: number) {
    this.http.delete('https://localhost:7131/api/Book/DeleteBook?id=' + id).subscribe((resp: any) => {
      window.location.reload();
      this.toastr.success("Book Deleted Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }
  
  CreateBook(body: any) {
    this.http.post('https://localhost:7131/api/Book/CreateBook', body).subscribe((resp: any) => {
      window.location.reload();  
      this.toastr.success("Book Created Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }

  display_image: any;
  UpdateBook(id:any, body: any) {
    body.book_Img_Path = this.display_image;        
    this.http.put('https://localhost:7131/api/Book/UpdateBook?id='+ id ,body).subscribe((resp: any) => {
      window.location.reload();
      this.toastr.success("Book Updated Successfully");
    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }
  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:7131/api/AboutUsPage/uploadImage', file).subscribe((resp: any) => {
      this.display_image = resp.imagename;
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
  GetTopBooks(){
    this.http.get("https://localhost:7131/api/Book/TopBooks").subscribe((resp)=>{
      this.topRatedBooks = resp;
    },err=>{ 
      console.log(err.message);
      console.log(err.status);
      
     
    })
  }
 
  GetAllCategoryBooks(){
      this.http.get("https://localhost:7131/api/Book/CategoryBooks").subscribe((resp)=>{
        this.allCategoriesBooks = resp;
      },err=>{ 
        console.log(err.message);
        console.log(err.status);
      })
    
  }

  GetFindBestSellingBook()
  {
    this.http.get("https://localhost:7131/api/Book/FindBestSellingBook").subscribe((resp)=>{
        this.bestSellingBook = resp;
        console.log(resp)
      },err=>{ 
        console.log(err.message);
        console.log(err.status);
      })
  }
GetBookByID(id:Number){
  debugger
   return this.http.get("https://localhost:7131/api/Book/GetBookById/"+id)
   
  
}

 //-----------------------------------------------BorrowedBooks Operations-----------------------------------------------
 GetAllBorrowedBooks(){
  this.http.get("https://localhost:7131/api/BorrowedBook/GetAllBorrowedBooks").subscribe((resp: any) => {
    this.borrowedBooks = resp;
  },
    (error: any) => {
      this.toastr.error("Error Occured");
    })

 }
}
