import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminService } from '../services/admin.service';
import { MainService } from '../services/main.service';
import { BookService } from '../services/book.service';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public manageHome:AdminService, public libraryService:LibraryService,public bookService:BookService){}
 
ngOnInit(): void {
  this.manageHome.GetAllHomepageData()
  this.bookService.GetTopBooks()
  this.bookService.GetAllCategoryBooks()
  this.bookService.GetFindBestSellingBook()
  this.libraryService.GetAllLibraries()
   }

   activeCategory: string = ''; 
   isActiveTab(category: any): boolean {
    return category.category_Name === this.activeCategory;
  }


 
  
  

}

