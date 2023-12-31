import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = []; // This will hold the data fetched from the API

  

  private apiUrl = 'https://localhost:7131/api/Book/GetAllBooks'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any[]> { // Consider defining a Book interface to replace any[]
    return this.http.get<any[]>(this.apiUrl);
  }
}
