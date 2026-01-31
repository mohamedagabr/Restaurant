import { Routes } from '@angular/router';
import {OrderItems} from './components/order-items/order-items';
import {CategoryItems} from './components/category-items/category-items';
 // Default Path http://localhost:4200
 export const routes: Routes = [
   //  Path http://localhost:4200/category/id
   { path: 'category/:id', component: OrderItems },     // الترتيب مهم
  //  Path http://localhost:4200/category
  { path: 'category', component: OrderItems },
   //  Path http://localhost:4200/orders/id
   { path: 'orders/:id', component: OrderItems },
   //  Path http://localhost:4200/orders
   { path: 'orders', component: OrderItems },
   //  Path http://localhost:4200/
   { path: '', redirectTo: '/orders', pathMatch: 'full' },
   // if users enter anything wrong
   { path: '**', redirectTo: '/orders', pathMatch: 'full' },


 ];

