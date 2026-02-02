import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- لازم
import { CategoryService } from '../../../service/category-service';
import { Category } from '../../../model/category';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.html',
  styleUrl: './admin-categories.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AdminCategories implements OnInit {
  categories: Category[] = [];

  selectedCategory: Category = new Category(0, '', '');
  isEditMode: boolean = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Failed to load categories', err)
    });
  }

  openAdd() {
    this.isEditMode = false;
    this.selectedCategory = new Category(0, '', '');
  }

  openEdit(category: Category) {
    this.isEditMode = true;
    this.selectedCategory = { ...category };
  }

  saveCategory() {
    if (this.isEditMode) {
      this.categoryService.updateCategory(this.selectedCategory).subscribe({
        next: () => this.loadCategories(),
        error: (err) => console.error('Failed to update category', err)
      });
    } else {
      this.categoryService.addCategory(this.selectedCategory).subscribe({
        next: () => this.loadCategories(),
        error: (err) => console.error('Failed to add category', err)
      });
    }
  }

  deleteCategory(categoryId: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(categoryId).subscribe({
        next: () => this.loadCategories(),
        error: (err) => console.error('Failed to delete category', err)
      });
    }
  }
}
