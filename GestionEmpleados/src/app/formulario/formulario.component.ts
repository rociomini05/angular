import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formNewEmpleado: FormGroup;
  constructor() {
    this.formNewEmpleado = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellidos: new FormControl ('',[Validators.required]),
      email: new FormControl ('',[Validators.required]),
      edad: new FormControl (''),
      departamento: new FormControl (''),
      password: new FormControl (''),
      imagen: new FormControl ('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formNewEmpleado.value);
  }

}
