import { Component, input, output } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>()
  addToCartEvent = output<Product>()

  public addToCart():void{
    this.addToCartEvent.emit(this.product())
  }
}
