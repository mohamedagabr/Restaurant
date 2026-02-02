import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {

}
