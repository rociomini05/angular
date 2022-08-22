import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevoProducto: Producto;
  constructor() { 
    this.nuevoProducto = new Producto();
  }

  ngOnInit(): void {
  }


}
