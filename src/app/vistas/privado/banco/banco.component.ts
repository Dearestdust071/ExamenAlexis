import { Component, inject } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';
import {MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-bancos',
  standalone: true,
  imports: [MatTableModule,RouterLink],
  templateUrl: './banco.component.html',
  styleUrl: './banco.component.css'
})
export class BancosComponent {
  private conexion:ConexionService = inject(ConexionService)
bancos:any;
dataSource:any;
displayedColumns=["Nombre"]
  async ngOnInit(){
    this.bancos=(await this.conexion.peticion("post","bancos","GetAll") as any).msg
    console.log(this.bancos);
    this.dataSource=this.bancos;
  }

}
