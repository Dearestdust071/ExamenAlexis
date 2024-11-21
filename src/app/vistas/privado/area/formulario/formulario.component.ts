import { Component, inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDateSelectionModel } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConexionService } from '../../../../servicios/conexion.service';

@Component({
  selector: 'FormularioArea',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatSelectModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioArea {
  private formbuilder: FormBuilder = inject(FormBuilder)

private router: Router=inject(Router);//nos va a apermitir obtener el link
private activatedrouter: ActivatedRoute = inject(ActivatedRoute)
private conexion:ConexionService = inject(ConexionService)

formulario:FormGroup = this.formbuilder.group({
AreaID: new FormControl(null),
NombreArea: new FormControl(null),
EncargadoID:new FormControl(null)

})

ngAfterViewInit(){
if (this.router.url.includes("detalle")){ //si la ruta incluye la palabra detalle lo vamos a cachar
// const id = this.activatedrouter.snapshot.queryParamMap.get("id")
this.activatedrouter.params.subscribe(async(params:Params)=> {
  const id = params['id'];
 const area = await this.conexion.peticion("post","areas","GetId",{AreaID:id})
console.log(area);

})
}
}

Enviar(){
  if(this.formulario.valid){

  }
}

Eliminar (){

}
}
