import { Component, inject } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trabajadores',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './trabajador.component.html',
  styleUrl: './trabajador.component.css'
})
export class TrabajadoresComponent {
private conexion:ConexionService = inject(ConexionService)
trabajadores:any;
dataSource:any;
displayedColumns=["Nombre_Trabajador","NombreArea","Nombre_Supervisor"]
async ngOnInit(){
  this.trabajadores=(await this.conexion.peticion("post","trabajadores","GetAll")as any).msg
  console.log(this.trabajadores);
  this.dataSource=this.trabajadores;
}
}
