import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudiantes } from 'src/app/interfaces/estudiantes';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private estudianteService: EstudiantesService,
    private router: Router) { 

    this.form= this.fb.group({
      DNI: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.email],

    })
  }

  ngOnInit(): void {
  }

  agregarEstudiante(){
    const estudiante: Estudiantes = {
        DNI: this.form.value.DNI,
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        sexo: this.form.value.sexo,
        telefono: this.form.value.telefono,
        email: this.form.value.email,
    }
      this.estudianteService.agregarEstudiante(estudiante);
      this.router.navigate(['/dashboard/Estudiantes']);
  }

}
