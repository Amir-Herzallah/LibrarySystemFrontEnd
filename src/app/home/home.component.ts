import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminService } from '../services/admin.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public manageHome:AdminService, public mainService:MainService,){}
 
ngOnInit(): void {
  this.manageHome.GetAllHomepageData()
  this.mainService.GetTopBooks()
  this.mainService.GetAllCategoryBooks()
  this.mainService.GetFindBestSellingBook()
  this.mainService.GetAllLibraries()
   }

   activeCategory: string = ''; 
   isActiveTab(category: any): boolean {
    return category.category_Name === this.activeCategory;
  }


 
  
  

}

