import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { CrearClaseComponent } from './crear-clase/crear-clase.component';






@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    CrearEstudianteComponent,
    CrearCursoComponent,
    CrearClaseComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class DashboardModule { }
