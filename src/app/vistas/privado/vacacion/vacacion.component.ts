import { Component, inject } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-vacaciones',
  standalone: true,
  imports: [MatTableModule,DatePipe,RouterLink],
  templateUrl: './vacacion.component.html',
  styleUrl: './vacacion.component.css'
})



export class VacacionesComponent {
  private conexion:ConexionService = inject(ConexionService)
  vacasiones:any;
  dataSource:any;
  async ngOnInit(){
    this.vacasiones=(await this.conexion.peticion("post","vacaciones","GetAll") as any).msg
    console.log(this.vacasiones);
    this.dataSource = this.vacasiones;
  }
  displayedColumns: string[] = ['Nombre_completo_trabajador', 'FechaInicio', 'FechaFin'];
}
