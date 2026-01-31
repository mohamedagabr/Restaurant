import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Order} from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  private baseUrl = 'http://localhost:8080/orders';
  //private ordersByCategoryIdUrl = 'http://localhost:8080/orders/byCategory?categoryId=';


  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl).pipe(
      map(
        response => response
      )
    )
  }
  getOrdersByCategoryId(id: number){
    return this.http.get<Order[]>(
      `${this.baseUrl}/byCategory?categoryId=${id}`
    );
  }

}
