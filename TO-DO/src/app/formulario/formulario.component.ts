import { Component, OnInit } from '@angular/core';
import { Tarea} from '../models/tarea.models';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevaTarea: Tarea;

  constructor() {
    this.nuevaTarea = new Tarea();
   }
   
  ngOnInit(): void {
  }

}
