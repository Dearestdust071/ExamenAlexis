import { Component, inject } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';

@Component({
  selector: 'app-vacaciones',
  standalone: true,
  imports: [],
  templateUrl: './vacacion.component.html',
  styleUrl: './vacacion.component.css'
})
export class VacacionesComponent {
  private conexion:ConexionService = inject(ConexionService)
  vacasiones:any;
  async ngOnInit(){
    this.vacasiones=await this.conexion.peticion("post","vacasiones","GetAll")
    console.log(this.vacasiones);
  }
}
