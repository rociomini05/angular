import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
productosSeleccionados: Producto[];

constructor(){
  this.productosSeleccionados = [];
}
onProductoCreado($event: any){
this.productosSeleccionados.push($event);
}
}