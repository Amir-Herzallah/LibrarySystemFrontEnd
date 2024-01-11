import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // //books
  // allBooks:any =[{}]
  // topRatedBooks:any=[{}]
  // allCategoriesBooks:any=[{}]
  // bestSellingBook:any;
 
  // //libraries
  // allLibaries:any=[{}]
  bank:any;
  
  constructor(private http:HttpClient, private toastr: ToastrService,) { }

  //----------------------------Bank Operations------------------
  
  GetBankByID(id:number){
     return this.http.get("https://localhost:7131/api/Bank/GetBankAccountById/"+id);
   
  }


  UpdateBank(bankInfo:any){
         this.http.put("https://localhost:7131/api/Bank/UpdateBankAccount",bankInfo).subscribe((resp)=>{
          //this.toastr.success('Updated !!'); 
         
        }, err=>{
          this.toastr.error('Error !!');
         
        })
  }


}