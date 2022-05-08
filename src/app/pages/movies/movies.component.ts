import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie, MovieGenres } from './../../constant/IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  $movieGenres: Observable<MovieGenres>=new Observable();
  constructor(private movieService:MovieService,private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
   this.$movieGenres=this.movieService.getMovies().pipe(map((iMovie)=>new MovieGenres(iMovie)))
  }

  goToDetail(movie:Movie):void{
    this.router.navigate(['/detail',movie.id],{relativeTo: this.route});
  }
}
