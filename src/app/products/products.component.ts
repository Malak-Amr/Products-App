import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, products } from '../app.config';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = products;

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log('Product added to cart:', product.name);
  }
}

