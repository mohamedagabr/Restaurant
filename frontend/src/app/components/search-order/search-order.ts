import { Component } from '@angular/core';
import {OrderService} from '../../service/order-service';
import {Order} from '../../model/order';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-order',
  imports: [],
  templateUrl: './search-order.html',
  styleUrl: './search-order.css',
})
export class SearchOrder {



  constructor(private router: Router) { }

  doSearch(value: string) {
    this.router.navigateByUrl('/orders/search/' + value + '')
  }
}
