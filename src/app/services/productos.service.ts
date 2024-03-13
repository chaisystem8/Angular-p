import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

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
        console.log(this.productos);
      });
  }
}
