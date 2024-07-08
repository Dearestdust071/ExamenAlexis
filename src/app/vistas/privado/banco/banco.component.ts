import { Component, inject } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-bancos',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './banco.component.html',
  styleUrl: './banco.component.css'
})
export class BancosComponent {

  private conexion:ConexionService = inject(ConexionService)
  bancos:any;
  async ngOnInit(){
    this.bancos=await this.conexion.peticion("post","bancos","GetAll")
    console.log(this.bancos);
  }
  
}
