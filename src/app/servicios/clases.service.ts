import { Injectable } from '@angular/core';
import { Clases } from '../interfaces/clases';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  listClases: Clases[] = [
    {idclase: 1, nombreclase: 'Base de Datos', profeclase: 'Humberto Juliano', duracion: '20 horas'},
    {idclase: 2, nombreclase: 'Analisis Matematico 1', profeclase: 'Julia Marinez', duracion: '20 horas'},
    {idclase: 3, nombreclase: 'ALED 1', profeclase: 'Lautaro Mendez', duracion: '20 horas'},
    {idclase: 4, nombreclase: 'EDI 1', profeclase: 'Juan Ramirez', duracion: '20 horas'},
    {idclase: 5, nombreclase: 'Estadistica', profeclase: 'Braulio Malini', duracion: '20 horas'},
  ];

  constructor() { }

  getClases(){
    return this.listClases.slice();
  }

  eliminarClase(index:number){
    this.listClases.splice(index, 1)
  }

  agregarClase(clase: Clases){
    this.listClases.unshift(clase);
  }

}
