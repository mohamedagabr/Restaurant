import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order-service';
import {Order} from '../../model/order';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-items',
  imports: [CommonModule],
  templateUrl: './order-items.html',
  styleUrl: './order-items.css',
  standalone: true
})
export class OrderItems implements OnInit{

  orders: Order[] = [] ;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = params.get('id');

      if (id) {
        this.getOrdersByCategoryId(+id);
      } else {
        this.getOrders();
      }

    });

  }

  getOrders(){
    this.orderService.getOrders()
      .subscribe(data => this.orders = data);
  }

  getOrdersByCategoryId(categoryId: number){
    this.orderService.getOrdersByCategoryId(categoryId)
      .subscribe(data =>{
        this.orders = data
      }
      );
  }


}
