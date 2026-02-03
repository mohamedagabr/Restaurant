package com.spring.restaurant.controller;

import com.spring.restaurant.model.Category;
import com.spring.restaurant.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin("http://localhost:4200")
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    private List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping
    private Category addCategory(@RequestBody Category category){
        return categoryService.addCategory(category);
    }

    @PutMapping("/{id}")
    public Category updateCategory(@PathVariable Integer id,
                                   @RequestBody Category category) {
        category.setCategoryId(id);
        return categoryService.updateCategory(category);
    }


    @GetMapping("/byCategoryId")
    private Category getCategoryById(@RequestParam Integer id){
        return categoryService.getCategoryById(id);
    }

   @DeleteMapping("/{id}")
   private void deleteCategory(@PathVariable  Integer id){
       categoryService.deleteCategory(id);
   }

}
