import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioTrabajador } from './vistas/privado/trabajador/formulario/formulario.component';
import { FormularioBanco } from './vistas/privado/banco/formulario/formulario.component';
import { FormularioVacacion } from './vistas/privado/vacacion/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormularioTrabajador,FormularioBanco,FormularioVacacion],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examen';
}
