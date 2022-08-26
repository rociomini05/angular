import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {
  [x: string]: any;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
  this.activatedRoute.params.suscribe(())
  }

}
