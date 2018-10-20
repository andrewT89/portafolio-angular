import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductDesc } from 'src/app/interfaces/product-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductDesc;
  productId: string;

  constructor( private route: ActivatedRoute,
                public _productService: ProductosService ) { }

  ngOnInit() {
    this.route.params
    .subscribe(parameters => {
      this._productService.getProduct(parameters['id'])
      .subscribe((product: ProductDesc) => {
        this.productId = parameters['id'];
        this.product = product;
        console.log(product);
      });
    });
  }

}
