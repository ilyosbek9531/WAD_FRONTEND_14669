import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

const BASE_URL = 'http://localhost:7176/api'
@Injectable({
  providedIn: 'root'
})
export class ServiceTodoService {
  httpClient = inject(HttpClient);

  getMovies(){
    return this.httpClient.get<Movie[]>(`${BASE_URL}/Movies`)
  };

  getMovie(id: number){
    return this.httpClient.get<Movie>(`${BASE_URL}/Movies/${id}`);
  };

  updateMovie(id: number, movie: Movie){
    return this.httpClient.put(`${BASE_URL}/Movies/${id}`, movie);  
  };

  deleteMovie(id:number){
    return this.httpClient.delete(`${BASE_URL}/Movies/${id}`);
  };

  createMovie(movie: Movie){
    return this.httpClient.post<Movie>(`${BASE_URL}/Movies`, movie);
  };
}