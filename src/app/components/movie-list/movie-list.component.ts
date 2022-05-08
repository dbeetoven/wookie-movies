import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieGenres } from './../../constant/IMovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
 @Input() movieGenres!: Observable<MovieGenres>;
 
 @Output() goToDetail = new EventEmitter<Movie>();


  hasGenre(genres:string[], genre:string):boolean{
    return genres.indexOf(genre)>-1;
  }

  goTo(movie:Movie):void {
    this.goToDetail.emit(movie);
  }

  ngOnInit(): void {
    this.movieGenres.subscribe((res)=>{
      console.log({res});
    })
    
  }
}
