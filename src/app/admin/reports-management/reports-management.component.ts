
import {Component} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-reports-management',
  templateUrl: './reports-management.component.html',
  styleUrls: ['./reports-management.component.css']
})
export class ReportsManagementComponent {

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

  
   
}
