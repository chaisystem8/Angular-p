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
  productosFiltrado: Producto[] = [];

  constructor( private http:HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise( (resolve, reject) => {
      this.http.get<Producto[]>('https://angular-html-30756-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        this.loading = false;
        this.productos = resp;        
      });
    });

    
  }

  // getProducto( id: string ) {

  //   return this.http.get(`https://angular-html-25cf9.firebaseio.com/productos/${ id }.json`);

  // }

  getProducto(id: string): Observable<ProductoDescripcion> {
    return this.http.get<ProductoDescripcion>(`https://angular-html-30756-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){

    if(this.productos.length === 0 ){
      this.cargarProductos().then( ()=> {
        // FILTRO
        this.filtrarProductos(termino)
      });
    }else{
        // FILTRO
        this.filtrarProductos(termino)
    }         
  }

  private filtrarProductos(termino: string){
    this.productosFiltrado = []
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >=0 ){
        this.productosFiltrado.push(prod)
      }
    });

  }
}
