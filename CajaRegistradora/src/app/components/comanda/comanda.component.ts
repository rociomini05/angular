import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
  @Input()
  arrProducto: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  calculaTotal(){

    let resultado = 0;
    for (let producto of this.arrProducto){
      resultado += (producto.precio * producto.cantidad);
    }
    return resultado;

  }
  onClickBorrar(indice: number){
    if(this.arrProducto[indice].cantidad ===1){ 
         this.arrProducto.splice(indice, 1); }
    else{
      this.arrProducto[indice].cantidad --;
    }
}
}
