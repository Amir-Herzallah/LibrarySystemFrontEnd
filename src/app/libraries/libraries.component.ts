import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { LibraryService } from '../services/library.service';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.css']
})
export class LibrariesComponent implements OnInit {
  selectedLibraryId: number | null = null;
  selectedCategoryId: number | null = null;
  selectedBooksId: number | null = null;
  searchText: string = '';
  constructor(public libraryService: LibraryService ,public bookService:BookService) {}
  ngOnInit():void {
    this.libraryService.GetAllLibraries();
    this.bookService.GetAllCategoryBooks();
   
  }
   // Method to fetch categories for a specific library
   showCategories(id: number) {
    
    this.selectedLibraryId = id; // Keep track of selected library
    debugger;
    console.log("Fetching categories for library ID: ", id);
    this.libraryService.GetCategoriesByLibraryId(id);
  }
  showBooks(id: number){
    this.selectedBooksId = id; // Keep track of selected category 
    debugger;
    console.log("Fetching categories for books  ID: ", id);
    this.libraryService.GetBooksByCategoryId(id);
  }
  
}
