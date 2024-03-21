import { Component, inject } from '@angular/core';
import { MCreateComponent } from '../../components/m-create/m-create.component';
import { Movie } from '../../../interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-edit',
  standalone: true,
  imports: [MCreateComponent],
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.scss',
})
export class MovieEditComponent {
  movieDetail: Movie = {
    id: 0,
    title: '',
    description: '',
    releaseDate: '',
    duration: null,
    categoryId: null,
    category: null,
  };

  activatedRoute = inject(ActivatedRoute);
  movieService = inject(MovieService);

  ngOnInit() {
    this.movieService
      .getMovie(this.activatedRoute.snapshot.params['id'])
      .subscribe((movie) => {
        this.movieDetail = movie;
      });
  }
}
