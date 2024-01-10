import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BorrowedbooksService } from 'src/app/services/borrowedbooks.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-borrowedbooks',
  templateUrl: './borrowedbooks.component.html',
  styleUrls: ['./borrowedbooks.component.css']
})
export class BorrowedbooksComponent {
  @ViewChild('contentPDF', { static: false })pdfElement!: ElementRef;

  startDate?: Date;  // Can be Date or undefined
  endDate?: Date;    

  constructor(public Borrowedbooksservice :BorrowedbooksService){ }
   
  ngOnInit():void {
    debugger;
    this.Borrowedbooksservice.GetAllBorrowedBooks();
  
}
createPDF(){
  let pdf = new jsPDF('l','pt','a3',true);
  pdf.html(this.pdfElement.nativeElement,{
    callback:(pdf)=>{
      pdf.save('Borrowed Books Report.pdf');
    }
  });
}

}