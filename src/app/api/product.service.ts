import { HttpClient } from '@angular/common/http';
import {
  EnvironmentInjector,
  inject,
  Injectable,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../shared/models/product';
import { tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = environment.apiUrl;
  private readonly _injector = inject(EnvironmentInjector);

  public products = signal<Product[]>([]);

  constructor() {
    this.getProducts();
  }

  public getProducts(): void {
    this._http
      .get<Product[]>(`${this._baseUrl}`)
      .pipe(tap((products: Product[]) => this.products.set(products)))
      .subscribe();
  }

  public getProductById(id: number) {
    return runInInjectionContext(this._injector, () =>
      toSignal<Product>(this._http.get<Product>(`${this._baseUrl}/${id}`))
    );
  }
}
