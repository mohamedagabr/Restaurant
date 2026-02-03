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

  getOrderByOrderName(orderName: String){
    return this.http.get<Order[]>(
      `${this.baseUrl}/byOrderName?orderName=${orderName}`
    );
  }


  // ===== Add Order =====
  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, order);
  }


  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}/${order.orderId}`, order);
  }


  deleteOrder(orderId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${orderId}`);
  }


  getOrderById(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${orderId}`);
  }

}
