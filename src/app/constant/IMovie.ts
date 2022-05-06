export interface Movie {
  backdrop: string;
  cast: string[];
  classification: Classification;
  director: string;
  genres: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
}

export enum Classification {
  The13 = '13+',
  The18 = '18+',
  The7 = '7+',
}

export interface Movies {
  movies: Movie[];
}
export interface IMovies {
  genres: string[];
  movies: Movie[];
}
export interface IMovie {
  movies: Movie[];
}
export class IMovies {
  genres!: string[];
  movies!: Movie[];

  constructor(movies: IMovie) {
    this.movies = movies.movies;
    this.genres = this.getGenres(movies.movies);
  }

 private getGenres(movies: Movie[]): string[] {
    const genres = movies.map((mov) => mov.genres);
    return Array.from(new Set(genres.flat()));
  }
}
