import { Component } from '@angular/core';

// Services
import { InfoPageService } from './services/info-page.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _infoPageService: InfoPageService,
                public _productsService: ProductosService ) {}
}
