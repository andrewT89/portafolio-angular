import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
                public _productsService: ProductosService ) { }

  ngOnInit() {
    this.route.params.subscribe( parameters => {
      console.log(parameters['term']);
      this._productsService.searchProduct(parameters['term']);
    });
  }

}
