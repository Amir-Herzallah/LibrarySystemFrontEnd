import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private apiUrl = 'https://localhost:7131/api/Library/GetAllLibraries';  

  constructor(private http: HttpClient) { }

  getLibraries(): Observable<any[]> { // changed return type to any[]
    this.http.get(this.apiUrl).subscribe(data => console.log(data));

    return this.http.get<any[]>(this.apiUrl);
  }
}
