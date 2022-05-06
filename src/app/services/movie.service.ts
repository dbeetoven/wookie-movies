import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getBy(param:string):Observable<any>{
    return this.http.get(`${environment.apiUrl}?q=${param}`)
  }
  getMovies():Observable<any>{
    return this.http.get(`${environment.apiUrl}`);
  }
}
