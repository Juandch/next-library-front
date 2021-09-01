import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private _http: HttpClient) {}

  getAuthors(): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.get('authors/', { headers: headers });
  }

  showAuthor(id: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.get('authors/' + id, { headers: headers });
  }

  deleteAuthor(id: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete('authors/' + id, { headers: headers });
  }

  createAuthor(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post('authors', data, { headers: headers });
  }
}
