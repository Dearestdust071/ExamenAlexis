import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioTrabajador } from './vistas/privado/trabajador/formulario/formulario.component';
import { FormularioBanco } from './vistas/privado/banco/formulario/formulario.component';
import { FormularioVacacion } from './vistas/privado/vacacion/formulario/formulario.component';
import { FormularioArea } from './vistas/privado/area/formulario/formulario.component';
import { TrabajadoresComponent } from './vistas/privado/trabajador/trabajador.component';
import { AreasComponent } from './vistas/privado/area/area.component';
import { BancosComponent } from './vistas/privado/banco/banco.component';
import { VacacionesComponent } from './vistas/privado/vacacion/vacacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormularioTrabajador,FormularioBanco,FormularioVacacion,FormularioArea,TrabajadoresComponent,AreasComponent,BancosComponent,VacacionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examen';
}
