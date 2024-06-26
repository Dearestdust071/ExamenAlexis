import { Component, inject } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreasComponent {
  private conexion:ConexionService = inject(ConexionService)
  areas:any;
  async ngOnInit(){
    this.areas=await this.conexion.peticion("post","areas","GetAll")
    console.log(this.areas);
  }
}
