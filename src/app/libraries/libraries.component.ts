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
  libraries: any[] = []; // changed type to any[]

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.getLibraries();
  }

  getLibraries(): void {
    this.libraryService.getLibraries().subscribe(
      (data) => {
        debugger ;
        this.libraries = data; 
      },
      (error) => {
        console.error('Error fetching libraries', error);
      }
    );
  }
  
}
