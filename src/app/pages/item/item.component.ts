import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  constructor(private route:ActivatedRoute, public productoService: ProductosService){}

  ngOnInit(){
    this.route.params
    .subscribe(parametros => {
      // console.log(parametros['id'])

      this.productoService.getProduct(parametros['id'])
      .subscribe(producto =>{
        console.log(producto)
      });
    })
  }

}
