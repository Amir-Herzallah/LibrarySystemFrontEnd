import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BorrowedbooksService {
  Borrowedbooks:any =[] ;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) { }
 
 
  GetAllBorrowedBooks() {
    this.http.get('https://localhost:7131/api/BorrowedBook/GetBorrowedBooksDetails').subscribe((resp) => { 
        this.Borrowedbooks = resp;
        debugger;
        console.log("Fetched Borrowedbooks: ", this.Borrowedbooks);
      },
      (error) => {
        console.error("Failed to fetch Borrowedbooks: ", error); 
        console.log(error.message);
        console.log(error.status);
      }
    );
}
}