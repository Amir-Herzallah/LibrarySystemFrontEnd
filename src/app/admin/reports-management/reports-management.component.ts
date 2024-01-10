
import {Component, ElementRef, ViewChild} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { jsPDF } from "jspdf";





@Component({
  selector: 'app-reports-management',
  templateUrl: './reports-management.component.html',
  styleUrls: ['./reports-management.component.css']
})
export class ReportsManagementComponent {

  @ViewChild('contentPDF', { static: false })pdfElement!:ElementRef;

  usersWithRervations:any;
  startDate!:Date;
  endDate!:Date;
  usersCount:any;
  range = new FormGroup({
    start: new FormControl<Date | null>(new Date()),  // Provide a default start date
    end: new FormControl<Date | null>(new Date()),    // Provide a default end date
  });
  selectedMonth: string = ''; // Initialize with an empty string or any default value
  selectedYear:string='';
  months: string[] = [
    'None','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  years:string[] = ['2022', '2023', '2024'];
  constructor(private http:HttpClient, public userServive:UserService){}
  ngOnInit(): void {
    
    this.userServive.GetUsersWithReservations().subscribe(resp=>{
      debugger
      this.usersWithRervations=resp
      this.usersCount=this.usersWithRervations.length
    
    })
  }

  
  createPDF(){
    let pdf = new jsPDF('l','pt','a4',true);
    pdf.text("Users With Reservations Report",10,10);
    pdf.html(this.pdfElement.nativeElement,{
      callback:(pdf)=>{
        pdf.save('Users With Reservations Report.pdf');
      }
    });
  }

}
