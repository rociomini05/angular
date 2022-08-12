import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
  @Input() tareas: Tarea[];

  constructor() { }

  ngOnInit(): void {
  }

}
