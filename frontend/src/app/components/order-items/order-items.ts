import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order-service';
import {Order} from '../../model/order';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-order-items',
  imports: [CommonModule],
  templateUrl: './order-items.html',
  styleUrl: './order-items.css',
  standalone: true
})
export class OrderItems implements OnInit{

  orders: Order[] = [] ;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
      this.getOrders();
    }

    getOrders(){
    this.orderService.getOrders().subscribe(
      data => this.orders = data);
    }

}
