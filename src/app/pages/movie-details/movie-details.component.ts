import { Component, inject } from '@angular/core';
import { DetailComponent } from '../../components/detail/detail.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  movieDetail: Movie = {
    id: 0,
    title: '',
    description: '',
    releaseDate: '',
    duration: 0,
    categoryId: null,
    category: null
}

  activatedRoute = inject(ActivatedRoute)
  movieService = inject(MovieService)

  ngOnInit() {
    this.movieService.getMovie(this.activatedRoute.snapshot.params["id"]).subscribe((movie)=>{
    this.movieDetail = movie  
    });
  }
}
