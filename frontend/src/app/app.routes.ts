import { Routes } from '@angular/router';
import {OrderItems} from './components/order-items/order-items';
import {CategoryItems} from './components/category-items/category-items';
 // Default Path http://localhost:4200
 export const routes: Routes = [
   //  Path http://localhost:4200/category/id
   { path: 'category/:id', component: OrderItems },     // الترتيب مهم
  //  Path http://localhost:4200/category
  { path: 'category', component: OrderItems },

   { path: 'orders/category/:id', component: OrderItems },
   { path: 'orders/search/:orderName', component: OrderItems },
   { path: 'orders', component: OrderItems },

   //  Path http://localhost:4200/
   { path: '', redirectTo: '/orders', pathMatch: 'full' },
   // if users enter anything wrong
   { path: '**', redirectTo: '/orders', pathMatch: 'full' },
 ];

