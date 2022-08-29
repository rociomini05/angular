import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas: Persona [];

  constructor() { 
    this.personas=[
      new Persona('Mario', 'Rodriguez', 32, true),
      new Persona('Rocio', 'Mini', 26, false),
      new Persona('Maria', 'Mestre', 22, true),
      new Persona('Gema', 'Lopez', 21, true),
    ];
  }
getAll(){
  return this.personas;
}




}
