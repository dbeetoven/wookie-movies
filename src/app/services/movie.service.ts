import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie, IMovies } from '../constant/IMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getBy(param:string):Observable<any>{
    return this.http.get(`${environment.apiUrl}?q=${param}`)
  }
  getMovies():Observable<IMovies>{
    return this.http.get(`${environment.apiUrl}`).pipe(map((res:any)=>new IMovies(res)
    ));
  }
}
