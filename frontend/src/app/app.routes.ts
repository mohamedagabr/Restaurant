import { Routes } from '@angular/router';
import {OrderItems} from './components/order-items/order-items';
import {CategoryItems} from './components/category-items/category-items';
import {AdminDashboard} from './components/admin/admin-dashboard/admin-dashboard';
import {AdminOrders} from './components/admin/admin-orders/admin-orders';
import {AdminCategories} from './components/admin/admin-categories/admin-categories';
 // Default Path http://localhost:4200
 export const routes: Routes = [
   { path: 'category/:id', component: OrderItems },
   { path: 'category', component: OrderItems },

   { path: 'orders/category/:id', component: OrderItems },
   { path: 'orders/search/:orderName', component: OrderItems },
   { path: 'orders', component: OrderItems },

   {
     path: 'admin',
     component: AdminDashboard,
     children: [
       { path: 'orders', component: AdminOrders },
       { path: 'categories', component: AdminCategories },
       { path: '', redirectTo: 'orders', pathMatch: 'full' } // default
     ]
   },

   { path: '', redirectTo: '/orders', pathMatch: 'full' },
   // ALWAYS LAST
   { path: '**', redirectTo: '/orders' }
 ];

