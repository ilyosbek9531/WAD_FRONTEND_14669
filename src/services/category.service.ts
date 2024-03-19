import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../interfaces/category.interface';

const BASE_URL = 'http://localhost:7176/api'
@Injectable({
  providedIn: 'root'
})
export class ServiceTodoService {
  httpClient = inject(HttpClient);

  getCategories(){
    return this.httpClient.get<Category[]>(`${BASE_URL}/Categories`)
  };

  getCategory(id: number){
    return this.httpClient.get<Category>(`${BASE_URL}/Categories/${id}`);
  };

  updateCategory(id: number, category: Category){
    return this.httpClient.put(`${BASE_URL}/Categories/${id}`, category);  
  };

  deleteCategory(id:number){
    return this.httpClient.delete(`${BASE_URL}/Categories/${id}`);
  };
  
  createCategory(category: Category){
    return this.httpClient.post<Category>(`${BASE_URL}/Categories`, category);
  };
}