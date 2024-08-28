import { Component, inject, input, OnInit, Signal } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { ProductService } from '../../../../api/product.service';
import { CurrencyPipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AddToCartButtonComponent } from '../../components/add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe, AddToCartButtonComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export default class DetailsComponent implements OnInit{
  private readonly productSvc = inject(ProductService)
  private readonly _sanitizer = inject(DomSanitizer)

  starArray:number[] = new Array(5).fill(0)

  productId = input<number>(0,{alias:'id'})
  product!: Signal<Product | undefined>


  ngOnInit(): void {
    this.product = this.productSvc.getProductById(this.productId())
  }

  generateStars(index:number): SafeHtml{
    let svgContent = null

    const rate = this.product()?.rating.rate as number

    if(index + 1 <= Math.floor(rate)){
      svgContent = '<svg width="32px" height="32px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ff6600" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #000000;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M10 1l3 6 6 .75-4.12 4.62L16 19l-6-3-6 3 1.13-6.63L1 7.75 7 7z"></path> </g> </g></svg>'
    } else if(index < rate){
      svgContent = '<svg width="32px" height="32px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ff6600" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #000000;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M10 1L7 7l-6 .75 4.13 4.62L4 19l6-3 6 3-1.12-6.63L19 7.75 13 7zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15L10 14.88V3.24z"></path> </g> </g></svg>'
    }else {
      svgContent = '<svg width="32px" height="32px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ff6600" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #000000;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M10 1L7 7l-6 .75 4.13 4.62L4 19l6-3 6 3-1.12-6.63L19 7.75 13 7zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15L10 14.88l-4.68 2.34.87-5.15-3.18-3.56 4.65-.58z"></path> </g> </g></svg>'
    }
    return this._sanitizer.bypassSecurityTrustHtml(svgContent)
  }
}
