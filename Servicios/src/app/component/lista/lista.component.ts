import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
arrPersonas: Persona[];
  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
  }

}
