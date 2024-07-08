import { Component, inject } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [MatTableModule],
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
  displayedColumns: string[] = ['AreaID', 'NombreArea', 'EncargadoID'];

}
