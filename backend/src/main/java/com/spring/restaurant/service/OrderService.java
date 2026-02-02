package com.spring.restaurant.service;

import com.spring.restaurant.model.Order;
import com.spring.restaurant.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public List<Order> getOrderByCategoryId(Integer categoryId){
        return orderRepository.findOrderByCategoryCategoryId(categoryId);
    }

    public List<Order> getOrderByOrderName(String orderName){
        return orderRepository.findByOrderNameContainingIgnoreCase(orderName);
    }

    public Order addOrder(Order order){
        return orderRepository.save(order);
    }

    public Order updateOrder(Order order){
        return orderRepository.save(order);
    }

    public void deleteOrder(Integer orderId){
        orderRepository.deleteById(orderId);
    }

}
