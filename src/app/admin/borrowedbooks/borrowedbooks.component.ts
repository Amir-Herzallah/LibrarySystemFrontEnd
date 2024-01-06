import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BorrowedbooksService } from 'src/app/services/borrowedbooks.service';
 
@Component({
  selector: 'app-borrowedbooks',
  templateUrl: './borrowedbooks.component.html',
  styleUrls: ['./borrowedbooks.component.css']
})
export class BorrowedbooksComponent {
  startDate?: Date;  // Can be Date or undefined
  endDate?: Date;    

  constructor(public Borrowedbooksservice :BorrowedbooksService){ }
   
  ngOnInit():void {
    debugger;
    this.Borrowedbooksservice.GetAllBorrowedBooks();
  
}
}