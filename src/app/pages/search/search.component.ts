import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor (private route: ActivatedRoute,
    public productosService: ProductosService){}

  ngOnInit(){
    this.route.params.subscribe(
      params => {
        console.log(params['termino'])
        this.productosService.buscarProducto(params['termino'])
      }
    )
  }
}
