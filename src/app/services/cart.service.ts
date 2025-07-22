import { Injectable } from '@angular/core';
import { Product } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
    console.log('Cart now:', this.items);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}
