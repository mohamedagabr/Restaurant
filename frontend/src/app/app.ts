import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { OrderItems } from './components/order-items/order-items';
import {CategoryItems} from './components/category-items/category-items';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    OrderItems,
    CategoryItems],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
