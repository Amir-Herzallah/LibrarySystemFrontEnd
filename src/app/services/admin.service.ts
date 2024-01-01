import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
//Manage Home Page 
homePageData:any=[{}]
//Images 
display_image :any ;
constructor(private http:HttpClient) { }
 //----------------------------Homepage Operations------------------
 GetAllHomepageData(){
  this.http.get("https://localhost:7131/api/Homepage/GetAllHomePageData").subscribe((resp)=>{
    this.homePageData=resp
  },err=>{
      alert("Something Went Wrong")
  })
}

CreateHomepage(body:any){
  body.logO_PATH=this.display_image;
  this.http.post("https://localhost:7131/api/Homepage/CreateHomePageData",body).subscribe((resp)=>{
    alert('Created');
   },err=>{ 
     console.log(err.message);
     console.log(err.status);
     alert('Something went wrong');
   })
}

UploadAttachment(file : FormData){
  this.http.post('https://localhost:7131/api/Homepage/uploadImage',file)
  .subscribe((resp:any)=>{
  this.display_image = resp.logO_PATH;
  console.log(this.display_image)
  },err=>{
  })
}

DeleteHomePage(id:number){
 this.http.delete("https://localhost:7131/api/Homepage/DeleteHomePageData/"+id).subscribe((resp)=>{
    alert("Deleted")
},err=>{
  
})
}

UpdateHomepage(body:any){
this.http.put("https://localhost:7131/api/Homepage/UpdateHomePageData",body).subscribe((resp)=>{
  alert("Updated")
},err=>{

})
}
}
