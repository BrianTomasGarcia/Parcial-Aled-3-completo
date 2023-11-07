import { Injectable } from '@angular/core';
import { Cursos } from '../interfaces/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  listCursos: Cursos[] = [
    {idcurso: 1, nombrecurso: 'Carpinteria', profesor:'Carlos Ilio'},
    {idcurso: 2, nombrecurso: 'Programación Web', profesor: 'Kevin Larralde'},
    {idcurso: 3, nombrecurso: 'Pasteleria', profesor:'Laura Orozco' },
    {idcurso: 4, nombrecurso: 'Albañileria', profesor:'Lautaro Garcia'},
    {idcurso: 5, nombrecurso: 'Contabilidad', profesor:'Oriana Dominguez'},
  ];

  constructor() { }

  getCursos(){
    return this.listCursos.slice();
  }

  eliminarCurso(index:number){
    this.listCursos.splice( index, 1)
  }

  agregarCurso(curso: Cursos){
    this.listCursos.unshift(curso);

  }
}
