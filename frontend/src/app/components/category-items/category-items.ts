import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category-service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-category-items',
  imports: [CommonModule],
  templateUrl: './category-items.html',
  styleUrl: './category-items.css',
  standalone: true
})
export class CategoryItems implements OnInit{

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
