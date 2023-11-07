import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstudiantesComponent } from '../estudiantes/estudiantes.component';
import { CursosComponent } from '../cursos/cursos.component';
import { ClasesComponent } from '../clases/clases.component';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { CrearClaseComponent } from './crear-clase/crear-clase.component';




const routes: Routes = [
    { path: '', component: DashboardComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'Estudiantes', component: EstudiantesComponent },
      { path: 'Cursos', component: CursosComponent },
      { path: 'Clases', component: ClasesComponent},
      { path: 'Crear-Estudiante', component: CrearEstudianteComponent},
      { path: 'Crear-Curso', component: CrearCursoComponent},
      { path: 'Crear-Clase', component: CrearClaseComponent},
    ]  
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
