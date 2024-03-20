import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Movie, MovieCreate } from '../interfaces/movie.interface';

const BASE_URL = 'https://localhost:7176/api'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpClient = inject(HttpClient);

  getMovies(){
    return this.httpClient.get<Movie[]>(`${BASE_URL}/Movies`)
  };

  getMovie(id: number){
    return this.httpClient.get<Movie>(`${BASE_URL}/Movies/${id}`);
  };

  updateMovie(id: number, movie: MovieCreate){
    return this.httpClient.put(`${BASE_URL}/Movies/${id}`, movie);  
  };

  deleteMovie(id:number){
    return this.httpClient.delete(`${BASE_URL}/Movies/${id}`);
  };

  createMovie(movie: MovieCreate){
    return this.httpClient.post<Movie>(`${BASE_URL}/Movies`, movie);
  };
}