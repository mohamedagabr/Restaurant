import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryItems} from './components/category-items/category-items';
import {Router, RouterModule, RouterOutlet, Routes} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CategoryItems
     ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('frontend');
}
