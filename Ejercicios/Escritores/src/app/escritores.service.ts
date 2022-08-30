import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db';
import { Escritor } from './models/escritor.model';
@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() {


  }
  getAll(): Escritor[] {
    return ESCRITORES;
  }


  getAllPromise(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES)
    });
  }

  getByPais(pPais: string): Promise<Escritor[]> {
    return new Promise((resolve, rejecto) => {
      const arrFiltrado = ESCRITORES.filter(escritores => {
        return escritores.pais === pPais;
      });
      resolve(arrFiltrado);
    });
  }

  getById(escritorId: any): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      const escritor = ESCRITORES.find(escritor => {
        return escritor.id === escritorId;

      });
      resolve(escritorFound);
    });
  }
}
