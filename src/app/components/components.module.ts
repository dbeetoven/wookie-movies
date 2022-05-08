import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieListComponent,
    MovieCardComponent
  ],
})
export class ComponentsModule { }
