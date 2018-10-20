import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  products: Products[] = [];
  productsFilter: Products[] = [];

  constructor( private http: HttpClient ) {
    this.loadProducts();
   }

  private loadProducts() {

    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-b7506.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Products[]) => {
        this.products = resp;

        setTimeout(() => {
          this.loading = false;
          resolve();
        }, 2000);
      });
    });
  }

  getProduct(id: string) {
    return this.http.get(`https://angular-html-b7506.firebaseio.com/productos/${id}.json`);
  }

  searchProduct(term: string) {

    if (this.products.length === 0) {
      // Load products
      this.loadProducts().then(() => {
        this.filterProducts(term);
      });
    } else {
      // Apply filter products
      this.filterProducts(term);
    }
  }

  private filterProducts(term: string) {

    this.productsFilter = [];
    term = term.toLocaleLowerCase();

    this.products.forEach((el) => {

      const tLower = el.titulo.toLocaleLowerCase();
      if (el.categoria.indexOf(term) >= 0 || tLower.indexOf(term) >= 0) {
        this.productsFilter.push(el);
      }
    });
  }
}
