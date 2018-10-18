import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  products: Products[] = [];

  constructor( private http: HttpClient ) {
    this.loadProducts();
   }

  private loadProducts() {
    this.http.get('https://angular-html-b7506.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Products[]) => {
      this.products = resp;

      setTimeout(() => {
        this.loading = false;
      }, 2000);
    });
  }
}
