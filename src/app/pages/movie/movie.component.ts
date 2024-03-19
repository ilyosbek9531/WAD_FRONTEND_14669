import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../interfaces/movie.interface';
import { TableKey } from '../../../types';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  router = inject(Router)
  movieService = inject(MovieService)
  movies: Movie[] = []

  ngOnInit(){
    this.movieService.getMovies().subscribe((result)=>{
      this.movies = result;
    });
  }

  displayedColumns: TableKey[] = [
    {
      label: "Id",
      key: 'id'   
    },
    {
      label: "Title",
      key: 'title'   
    },
    {
      label: "Description",
      key: 'description'   
    },
    {
      label: "Release Date",
      key: 'releaseDate'   
    },
    {
      label: "Duration",
      key: 'duration'   
    }
  ];
}
