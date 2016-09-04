import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  moduleId: module.id,
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
  directives: [MovieComponent],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];

  constructor(private movieService: MovieService) {
   }

  ngOnInit() {
    this.movieService
      .getMovies()
      .subscribe(movies => this.movies = movies);
  }
}
