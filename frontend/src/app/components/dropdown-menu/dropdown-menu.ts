import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category-service';
import {Category} from '../../model/category';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './dropdown-menu.html',
  styleUrl: './dropdown-menu.css',
})
export class DropdownMenu implements OnInit{

  constructor(private categoryService: CategoryService) {
  }

  categories: Category[] = [];


  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      data => this.categories = data);
  }

}
