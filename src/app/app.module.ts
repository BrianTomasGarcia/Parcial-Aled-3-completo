import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ClasesComponent } from './components/clases/clases.component';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EstudiantesComponent,
    CursosComponent,
    ClasesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    MatToolbarModule,
    
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
