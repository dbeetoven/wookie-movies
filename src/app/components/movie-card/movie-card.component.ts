import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/constant/IMovie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;
 
  @Output() goToDetail = new EventEmitter<Movie>();

  goTo(movie:Movie):void {
    this.goToDetail.emit(movie);
  }
}
