import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  @Input() productos: Producto[] = [];
  @Input()
  textoBoton!: string;
  @Output() productoSeleccionado: EventEmitter<number> 
  constructor() { 
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(indice: number | undefined){
    this.productoSeleccionado.emit(indice);

}
}
