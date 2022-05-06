import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IMovies } from 'src/app/constant/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  $iMovies: Observable<any>=new Observable();
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
   this.$iMovies=this.movieService.getMovies()
  }

}
