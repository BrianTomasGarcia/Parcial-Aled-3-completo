import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Clases } from 'src/app/interfaces/clases';
import { ClasesService } from 'src/app/servicios/clases.service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {
 formClase: FormGroup;

  constructor(private fbClase: FormBuilder, private claseService: ClasesService, private router: Router, private _snackBarClase : MatSnackBar) { 
    this.formClase = this.fbClase.group({
      idclase: ['', Validators.required],
      nombreclase: ['', Validators.required],
      profeclase: ['', Validators.required],
      duracion: ['', Validators.required],
    })

  }

  ngOnInit(): void {
  }

  agregarclase(){
    const clase: Clases = {
      idclase: this.formClase.value.idclase,
      nombreclase: this.formClase.value.nombreclase,
      profeclase: this.formClase.value.profeclase,
      duracion: this.formClase.value.duracion,
   }
    this.claseService.agregarClase(clase);
    this.router.navigate(['/dashboard/Clases']);

    this._snackBarClase.open('La clase fue agregada exitosamente', '',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    })

  }

}
