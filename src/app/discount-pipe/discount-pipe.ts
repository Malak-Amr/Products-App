import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage?: number): string {
    if (!discountPercentage) return `${price.toFixed(2)} EGP`;

    const discounted = price * (1 - discountPercentage / 100);
    return `Before: ${price.toFixed(2)} EGP | After: ${discounted.toFixed(2)} EGP`;
  }
}
