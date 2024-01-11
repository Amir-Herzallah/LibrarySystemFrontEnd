import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BookReviewService {

  constructor(private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog) { }

    rev:any;
    CreateReview(body: any) {
      debugger;
      console.log(body.value);
      
      this.http.post('https://localhost:7131/api/BookReview/CreateBookReview', body).subscribe((resp: any) => {
        this.rev=resp;
        this.toastr.success("Book Created Successfully");
      },
        (error: any) => {
          this.toastr.error("Error Occured");
        })
    }
}
