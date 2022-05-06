import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovies } from './../../constant/IMovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
 @Input() iMovies!: Observable<any>;
 
  ngOnInit(): void {
    this.iMovies.subscribe((res)=>{
      
      console.log({res});
    })
    
  }

  hasGenre(genres:string[], genre:string):boolean{
    return genres.indexOf(genre)>-1;
  }
}
