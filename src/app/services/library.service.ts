import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) { }
 
  libraries : any=[];  
  Categories : any=[];   
   Books :any= [];
  GetAllLibraries() {
    this.http.get('https://localhost:7131/api/Library/GetAllLibraries').subscribe((resp) => { 
        this.libraries = resp;
        console.log("Fetched Libraries: ", this.libraries);
      },
      (error) => {
        console.error("Failed to fetch libraries: ", error); 
        console.log(error.message);
        console.log(error.status);
      }
    );
  }

    GetCategoriesByLibraryId(id: number) {
      debugger;
      this.http.get(`https://localhost:7131/api/Category/GetCategoriesByLibraryId?id=${id}`)
       .subscribe((res:any) =>{
        this.Categories = res;
        console.log("Fetched Categories: ", this.Categories);
      } ,
        error => {
          console.error("Failed to fetch categories: ", error);
        }
      );
    }


    GetBooksByCategoryId(id: number){
      debugger;
    this.http.get(`  https://localhost:7131/api/Category/GetBooksByCategoryId?id=${id}`)
 
    .subscribe((res:any) =>{
    
     this.Books = res;
     console.log("Fetched Books: ", this.Books);
   } ,
     error => {
       console.error("Failed to fetch Books: ", error);
  }
  );
}
  



    DeleteLibrary(id: number) {
      this.http.delete('https://localhost:7131/api/Library/DeleteLibrary?id=' + id).subscribe((resp: any) => {
        window.location.reload();
        this.toastr.success("Library Deleted Successfully");
      },
        (error: any) => {
          this.toastr.error("Error Occured");
        })
    }
  
    CreateLibrary(body: any) {
    
      body.image_Path1=this.display_image;
      this.http.post('https://localhost:7131/api/Library/CreateLibrary', body).subscribe((resp: any) => {
        window.location.reload();  
        this.toastr.success("Library Created Successfully");
      },
        (error: any) => {
          this.toastr.error("Error Occured");
        })
    }
    display_image: any;
  
    UpdateLibrary(id:any, body: any) {
        debugger;
        body.image_Path1=this.display_image;    
        body.image_Path2=this.display_image;    
        
      this.http.put('https://localhost:7131/api/Library/UpdateLibrary?id='+ id ,body).subscribe((resp: any) => {
        window.location.reload();   
        this.toastr.success("Library Updated Successfully");
      },
        (error: any) => {
          this.toastr.error("Error Occured");
        })
    }

    uploadAttachment(file: FormData) {
      this.http.post('https://localhost:7131/api/Library/uploadImage', file).subscribe((resp: any) => {
        this.display_image = resp.image_Path1;
        this.toastr.success("Image Uploaded Successfully");
      },
        (error: any) => {
          this.toastr.error("Error Occured");
        })
    }
  
  
 
    GetBorrowedBooksCountInLibraries(){
      return this.http.get("https://localhost:7131/api/Library/GetBorrowedBooksCountInLibraries");
    }


  }