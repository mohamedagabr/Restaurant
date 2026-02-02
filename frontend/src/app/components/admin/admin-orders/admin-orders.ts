import { Component, OnInit, signal } from '@angular/core';
import { Order } from '../../../model/order';
import { OrderService } from '../../../service/order-service';
import { Category } from '../../../model/category';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Modal } from 'bootstrap';
import {CategoryService} from '../../../service/category-service';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-orders.html',
  styleUrls: ['./admin-orders.css'],
})
export class AdminOrders implements OnInit {

  orders: Order[] = [];
  categories: Category[] = [];

  // Signals for modal forms
  modalTitle = signal('');
  selectedOrder: Order | null = null;

  // FormGroup for Add/Edit
  orderForm: FormGroup = new FormGroup({
    orderId: new FormControl(null),
    orderName: new FormControl('', Validators.required),
    orderPrice: new FormControl(0, [Validators.required, Validators.min(0)]),
    image: new FormControl(''),
    orderDescription: new FormControl(''),
    category: new FormControl(null, Validators.required)
  });

  constructor(private orderService: OrderService,
              private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  // Load all orders
  loadOrders() {
    this.orderService.getOrders().subscribe({
      next: (data) => this.orders = data,
      error: (err) => console.error('Failed to load orders', err)
    });
  }



  // ===== Add Order =====
  openAdd() {
    this.modalTitle.set('Add Order');
    this.selectedOrder = null;
    this.orderForm.reset();
    // show bootstrap modal (assume #orderModal in HTML)
    const modalEl = document.getElementById('orderModal');
    if (modalEl) new Modal(modalEl).show();
  }

  // ===== Edit Order =====
  edit(o: Order) {
    this.modalTitle.set('Edit Order');
    this.selectedOrder = o;

    this.orderForm.patchValue({
      orderId: o.orderId,
      orderName: o.orderName,
      orderPrice: o.orderPrice,
      image: o.image,
      orderDescription: o.orderDescription,
      category: o.category
    });

    const modalEl = document.getElementById('orderModal');
    if (modalEl) new Modal(modalEl).show();
  }

  // ===== Delete Order =====
  delete(orderId: number) {
    if (!confirm('Are you sure you want to delete this order?')) return;

    this.orderService.deleteOrder(orderId).subscribe({
      next: () => {
        this.orders = this.orders.filter(o => o.orderId !== orderId);
        alert('Order deleted successfully!');
      },
      error: (err) => console.error('Failed to delete order', err)
    });
  }

  // ===== Submit Add/Edit Form =====
  save() {
    if (this.orderForm.invalid) {
      alert('Please fill all required fields!');
      return;
    }

    const formValue = this.orderForm.value as Order;

    if (this.selectedOrder) {
      // Update
      this.orderService.updateOrder(formValue).subscribe({
        next: (updated) => {
          const index = this.orders.findIndex(o => o.orderId === updated.orderId);
          if (index >= 0) this.orders[index] = updated;
          alert('Order updated successfully!');
          this.closeModal();
        },
        error: (err) => console.error('Failed to update order', err)
      });
    } else {
      // Add
      this.orderService.addOrder(formValue).subscribe({
        next: (added) => {
          this.orders.push(added);
          alert('Order added successfully!');
          this.closeModal();
        },
        error: (err) => console.error('Failed to add order', err)
      });
    }
  }

  // Close modal
  closeModal() {
    const modalEl = document.getElementById('orderModal');
    if (modalEl) new Modal(modalEl).hide();
  }

}
