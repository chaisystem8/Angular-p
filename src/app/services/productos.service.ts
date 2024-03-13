import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;

  constructor( private http:HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-30756-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (productos) => {
      console.log(productos)
      this.loading = false
    });
  }
}
