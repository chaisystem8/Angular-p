import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  productos: Producto[] = [];

  constructor( private http:HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get<Producto[]>('https://angular-html-30756-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        this.loading = false;
        this.productos = resp;
      });
  }

  getProducto( id: string ) {

    return this.http.get(`https://angular-html-25cf9.firebaseio.com/productos/${ id }.json`);

  }
}
