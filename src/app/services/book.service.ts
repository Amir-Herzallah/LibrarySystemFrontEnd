import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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

  books: any = [{}];

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
    this.http.delete('https://localhost:7198/api/Book/DeleteBook/' + id).subscribe((resp: any) => {
      this.toastr.success("Book Deleted Successfully");

    },
      (error: any) => {
        this.toastr.error("Error Occured");
      })
  }

  createBook: FormGroup = new FormGroup({
    book_Id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    book_Img_Path: new FormControl('', Validators.required),
    book_Pdf_Path: new FormControl('', Validators.required),
    publication_Date: new FormControl('', Validators.required),
    avg_Rating: new FormControl('', Validators.required),
    category_Id: new FormControl('', Validators.required)
  });

  CreateBook() {
    this.spinner.show();
    this.http.post('https://localhost:7131/api/Book/CreateBook', this.createBook.value).subscribe((resp: any) => {
      this.toastr.success("Book Created Successfully");
      this.spinner.hide();
    },
      (error: any) => {
        this.toastr.error("Error Occured");
        this.spinner.hide();
      })
  }
  updateBook: FormGroup = new FormGroup({
    book_Id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    book_Img_Path: new FormControl('', Validators.required),
    book_Pdf_Path: new FormControl('', Validators.required),
    publication_Date: new FormControl('', Validators.required),
    avg_Rating: new FormControl('', Validators.required),
    category_Id: new FormControl('', Validators.required)
  });

  display_image: any;
  UpdateBook(id:any ,body: any) {
    body.book_Img_Path = this.display_image;    

    console.log(id, body);
    
    this.http.put('https://localhost:7131/api/Book/UpdateBook', id ,body).subscribe((resp: any) => {
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

}
