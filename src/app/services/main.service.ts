import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  //books
  allBooks:any =[{}]
  topRatedBooks:any=[{}]
  allCategoriesBooks:any=[{}]
  bestSellingBook:any;
 
  //libraries
  allLibaries:any=[{}]
  
  constructor(private http:HttpClient) { }
  //----------------------------Books Operations------------------
  GetAllBooks(){
    this.http.get("https://localhost:7131/api/Book/GetAllBooks").subscribe((resp)=>{
      this.allBooks = resp;
    },err=>{ 
      console.log(err.message);
      console.log(err.status);
      
     
    })
  }
  CreateBook(body:any){
    debugger
    body.book_Img_Path=this.display_image
    this.http.post("https://localhost:7131/api/Book/CreateBook",body).subscribe((resp)=>{
     alert('Created');
    },err=>{ 
      console.log(err.message);
      console.log(err.status);
      
     
    })
  }
  display_image :any ;
  UploadAttachment(file : FormData){
    debugger
    this.http.post('https://localhost:7131/api/Book/uploadImage',file)
    .subscribe((resp:any)=>{
    this.display_image = resp.book_Img_Path;
    console.log(this.display_image)
    },err=>{
      
    })
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

 
    //----------------------------Library Operations------------------
 GetAllLibraries()
 {
  this.http.get("https://localhost:7131/api/Library/GetAllLibraries").subscribe((resp)=>{
      this.allLibaries = resp;
    },err=>{ 
      console.log(err.message);
      console.log(err.status);
    })
 }
}