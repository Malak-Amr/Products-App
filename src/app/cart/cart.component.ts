import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Product } from '../app.config';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}
