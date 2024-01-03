import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LibraryService } from '../services/library.service';
@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.css']
})
export class LibrariesComponent implements OnInit {
  selectedLibraryId: number | null = null;
  constructor(public libraryService: LibraryService) {}
  ngOnInit():void {
    this.libraryService.GetAllLibraries();
  }
   // Method to fetch categories for a specific library
   showCategories(id: number) {
    
    this.selectedLibraryId = id; // Keep track of selected library
    console.log("Fetching categories for library ID: ", id);
    this.libraryService.GetCategoriesByLibraryId(id);
   

 

  }
  
}
