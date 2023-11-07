import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/interfaces/cursos';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  formCursos: FormGroup;
  

  constructor(private fbCurso: FormBuilder, private cursoService: CursosService, private router: Router, private _snackBarCurso : MatSnackBar) { 
    this.formCursos= this.fbCurso.group({
      idcurso: ['', Validators.required],
      nombrecurso: ['', Validators.required],
      profesor: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  agregarcurso(){
    const curso: Cursos = {
        idcurso: this.formCursos.value.idcurso,
        nombrecurso: this.formCursos.value.nombrecurso,
        profesor: this.formCursos.value.profesor,
     }
      this.cursoService.agregarCurso(curso);
      this.router.navigate(['/dashboard/Cursos']);

      this._snackBarCurso.open('El curso fue agregado exitosamente', '',{
        duration:1500,
        horizontalPosition:'center',
        verticalPosition: 'bottom'
      })
  }

}
