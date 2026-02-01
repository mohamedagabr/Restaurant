package com.spring.restaurant.controller;

import com.spring.restaurant.model.Order;
import com.spring.restaurant.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin("http://localhost:4200")
public class OrderController {

    private final OrderService orderService;

     @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }


//    @GetMapping("/{id}")
//    public List<Order> getOrderByCategoryId(@PathVariable Integer id) {
//        return orderService.getOrderByCategoryId(id);
//    }

    @GetMapping("/byCategory")
    public List<Order> getOrderByCategoryId(@RequestParam Integer categoryId){
         return  orderService.getOrderByCategoryId(categoryId);
    }
    @GetMapping("/byOrderName")
    public List<Order> getOrderByOrderName(@RequestParam String orderName){
        return orderService.getOrderByOrderName(orderName);
    }



}
