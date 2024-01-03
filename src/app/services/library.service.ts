import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

 
  libraries : any=[];  

   
  Categories : any=[];   
  constructor(private http: HttpClient) {}

  GetAllLibraries() {
    this.http.get('https://localhost:7131/api/Library/GetAllLibraries').subscribe((resp) => {
     
   
        this.libraries = resp;
        debugger;
        console.log("Fetched Libraries: ", this.libraries);
      },
      (error) => {
        console.error("Failed to fetch libraries: ", error); 
        console.log(error.message);
        console.log(error.status);
      }
    );
  }
    // Fetch categories for a specific library
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
}
