import { Component, input } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AddToCartButtonComponent } from "../add-to-cart-button/add-to-cart-button.component";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe, RouterLink, AddToCartButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>()
}
