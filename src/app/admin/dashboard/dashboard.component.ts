import { Component } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { UserService } from 'src/app/services/user.service';
import {Chart, registerables} from 'node_modules/chart.js';
import { BookService } from 'src/app/services/book.service';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public userService:UserService, public libraryService:LibraryService, public bookService:BookService){}
  librariesName:any[]=[];
  numOfBorrowedBooks:any[]=[];
  allLibrariesWithBorrowedBooks:any;
  ngOnInit(): void {
  this.userService.GetNumberOfRegisteredUsers()
  this.libraryService.GetAllLibraries()
  this.bookService.GetAllBorrowedBooks()
   this.libraryService.GetBorrowedBooksCountInLibraries().subscribe(res=>{
    
    this.allLibrariesWithBorrowedBooks=res;
    for ( let i=0;i<this.allLibrariesWithBorrowedBooks.length;i++)
    {
           this.librariesName.push(this.allLibrariesWithBorrowedBooks[i].library_Name);
           this.numOfBorrowedBooks.push(this.allLibrariesWithBorrowedBooks[i].borroweD_BOOKS_COUNT);
         
    }
     
    this.RenderCharts( this.librariesName,  this.numOfBorrowedBooks);
    });
  
   
    
  }
  RenderCharts(lablesData:any, mainData:any){
   
    const ctx = document.getElementById('myChart');

    new Chart("barChart", {
      type: 'bar',
      data: {
        labels: lablesData,
        datasets: [{
          label: '# of bowrroed books',
          data: mainData,
          borderWidth: 1
        }]
      },
      options: {
        
    responsive: true,
    
        scales: {
          y: {

            beginAtZero: true
          }
        }
        
      }
    });
  }
}
