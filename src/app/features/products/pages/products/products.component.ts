import { Component, inject } from '@angular/core';
import { ProductService } from '../../../../api/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {

  private readonly productSvc = inject(ProductService)

  products = this.productSvc.products
}
