import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private baseUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl).pipe(
      map(
        response => response
      )
    )
  }


  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category);
  }


  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/${category.categoryId}`, category);
  }


  deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${categoryId}`);
  }


  getCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${categoryId}`);
  }


}
