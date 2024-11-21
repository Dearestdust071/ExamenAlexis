import { Component, inject } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';
import {MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreasComponent {
  private conexion:ConexionService = inject(ConexionService)
  areas:any;
  dataSource:any;
  async ngOnInit(){
    this.areas=(await this.conexion.peticion("post","areas","GetAll")as any).msg
    console.log(this.areas);
    this.dataSource = this.areas;
  }
  displayedColumns: string[] = ['AreaID', 'NombreArea', 'Nombre_completo_encargado'];

}
