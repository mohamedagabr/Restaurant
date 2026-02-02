package com.spring.restaurant.service;

import com.spring.restaurant.model.Category;
import com.spring.restaurant.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getCategories(){
        return categoryRepository.findAll();
    }

    public Category addCategory(Category category){
        return categoryRepository.save(category);
    }

    public Category updateCategory(Category category){
        return categoryRepository.save(category);
    }

    public Category getCategoryById(Integer id){
        return categoryRepository.findById(id).orElse(null);
    }

    public void deleteCategory(Integer id){
        categoryRepository.deleteById(id);
    }

}
