import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BorrowedbooksService {
  Borrowedbooks: any = [];
  BorrowedbooksByIdUser: any = [];
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
  // To get the Borrowed books for User 
  GetBorrowedBooksByIdUser(id: number) {
    console.log(id);
    this.http.get(`https://localhost:7131/api/BorrowedBook/BorrowedbooksByIdUser?id=${id}`)
      .subscribe((res: any) => {
        this.BorrowedbooksByIdUser = res;
        console.log("Fetched BorrowedbooksByIdUserks: ", this.BorrowedbooksByIdUser);
      },
        error => {
          console.error("Failed to fetch BorrowedbooksByIdUser: ", error);
          console.log(error.status);
        }
      );
  }
  CreateBorrowedBook(body: any) {
    debugger;
    this.http.post('https://localhost:7131/api/BorrowedBook/CreateBorrowedBook', body).subscribe((resp: any) => {
   //  console.log(resp)
    },
      (error: any) => {
       
      })
  }
}
