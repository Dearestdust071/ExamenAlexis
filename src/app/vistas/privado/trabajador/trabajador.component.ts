import { Component, inject } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';

@Component({
  selector: 'app-trabajadores',
  standalone: true,
  imports: [],
  templateUrl: './trabajador.component.html',
  styleUrl: './trabajador.component.css'
})
export class TrabajadoresComponent {
private conexion:ConexionService = inject(ConexionService)
trabajadores:any;
async ngOnInit(){
  this.trabajadores=await this.conexion.peticion("post","trabajadores","GetAll")
  console.log(this.trabajadores);
}
}
