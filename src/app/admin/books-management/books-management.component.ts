import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-management',
  templateUrl: './books-management.component.html',
  styleUrls: ['./books-management.component.css']
})
export class BooksManagementComponent {
  @ViewChild('callCreateDailog') callCreateDialog !: TemplateRef<any>;
  @ViewChild('callDeleteDailog') callDeleteDialog !: TemplateRef<any>;
  @ViewChild('callUpdateDailog') callUpdateDialog !: TemplateRef<any>;

  updateBook: FormGroup = new FormGroup({
    book_Id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    book_Img_Path: new FormControl('', Validators.required),
    book_Pdf_Path: new FormControl('', Validators.required),
    publication_Date: new FormControl('', Validators.required),
    price_Per_Day: new FormControl('', Validators.required),
    avg_Rating: new FormControl('', Validators.required),
    category_Id: new FormControl('', Validators.required)
  });

  _filterText: string = '';

  constructor(public book: BookService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.book.GetAllBooks();
  }
  OpenCreateDialog() {
    this.dialog.open(this.callCreateDialog);
  }
  CreateBook() {
    this.book.CreateBook();
  }

  DeleteBook(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'yes') {
        this.book.DeleteBook(id);
      }
      else {
        alert("Course Not Deleted");
      }
    });
  }

  pData: any;
  OpenUpdateDialog(book: any) {
    this.pData = book;
    this.book.updateBook.controls['book_Id'].setValue(this.pData.book_Id);
    this.book.updateBook.controls['category_Id'].setValue(this.pData.category_Id);
    this.book.display_image = this.pData.book_Img_Path;
    this.dialog.open(this.callUpdateDialog);
  }

  CallUpdateBook() {
    this.book.UpdateBook(this.pData.book_Id,this.book.updateBook.value);
  }

  uploadImage(file: any) {
    if (file.length === 0)
      return;

    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.book.uploadAttachment(formData);
  }
}
