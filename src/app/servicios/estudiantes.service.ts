import { Injectable } from '@angular/core';
import { Estudiantes } from '../interfaces/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  listEstudiantes: Estudiantes[] = [
    {DNI: 1, nombre: 'Vivi', apellido: "Ope", sexo: 'Femenino', telefono: 14523, email: "Viviope2@glorb.com"},
    {DNI: 2, nombre: 'Aba', apellido: "Uegs", sexo: 'Femenino', telefono: 98463, email: "Abauegs8@bian.com"},
    {DNI: 3, nombre: 'Ulger', apellido: "Vaw", sexo: 'Masculino', telefono: 58136, email: "Ulgervaw9@oie.com"},
    {DNI: 4, nombre: 'Powa', apellido: "Siux", sexo: 'Masculino', telefono: 94231, email: "Powasiux5@gail.com"},
    {DNI: 5, nombre: 'Biwo', apellido: "Bari", sexo: 'Femenino', telefono: 14523, email: "Biwobari8@gma.com"},
  ];

  constructor() { }

  getEstudiante(){
    return this.listEstudiantes.slice();
  }

  eliminarEstudiante(index:number){
    this.listEstudiantes.splice( index, 1)
  }

  public editarEstudiante(element: Estudiantes, updatedElement: Estudiantes) {
    let index = this.listEstudiantes.indexOf(element);
    this.listEstudiantes[index] = updatedElement;
    console.log(this.listEstudiantes[index]);
}


  agregarEstudiante(estudiante: Estudiantes){
    this.listEstudiantes.unshift(estudiante);
  }
}