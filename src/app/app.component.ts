import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // constructor(public InfoPageService: InfoPageService, 
  //             public productosService: ProductosService){
    
  // }
  constructor(public InfoPageService: InfoPageService){

}
}
