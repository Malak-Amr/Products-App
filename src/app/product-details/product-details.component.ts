import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../app.config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../discount-pipe/discount-pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule, DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.product = products.find(p => p.id === id);
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) this.quantity--;
  }

  // ✅ توليد مصفوفة 5 عناصر لعرض النجوم
  getStars(rating: number): number[] {
    return Array(5).fill(0);
  }
}
