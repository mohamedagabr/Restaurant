import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryItems} from './components/category-items/category-items';
import {Router, RouterModule, RouterOutlet, Routes} from '@angular/router';
import {DropdownMenu} from './components/dropdown-menu/dropdown-menu';
import {SearchOrder} from './components/search-order/search-order';
import {AdminDashboard} from './components/admin/admin-dashboard/admin-dashboard';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    CategoryItems,
    DropdownMenu,
    SearchOrder,
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('frontend');
}
