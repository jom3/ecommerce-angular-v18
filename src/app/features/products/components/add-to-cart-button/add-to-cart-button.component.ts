import { Component, input, output } from '@angular/core';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'add-to-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-button.component.html',
  styleUrl: './add-to-cart-button.component.scss'
})
export class AddToCartButtonComponent {
  product = input<Product>()
  addToCartEvent = output<Product>()

  public addToCart():void{
    console.log(this.product())
    this.addToCartEvent.emit(this.product()!)
  }
}
