import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category, CategoryCreate } from '../interfaces/category.interface';
import { Observable } from 'rxjs';

const BASE_URL = 'https://localhost:7176/api'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpClient = inject(HttpClient);

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${BASE_URL}/Categories`)
  };

  getCategory(id: number): Observable<Category>{
    return this.httpClient.get<Category>(`${BASE_URL}/Categories/${id}`);
  };

  updateCategory(id: number, category: Category){
    return this.httpClient.put(`${BASE_URL}/Categories/${id}`, category);  
  };

  deleteCategory(id:number){
    return this.httpClient.delete(`${BASE_URL}/Categories/${id}`);
  };
  
  createCategory(category: CategoryCreate): Observable<Category>{
    return this.httpClient.post<Category>(`${BASE_URL}/Categories`, category);
  };
}