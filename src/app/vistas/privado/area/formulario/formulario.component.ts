import { Component, inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDateSelectionModel } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'FormularioArea',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatSelectModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioArea {
  private formbuilder: FormBuilder = inject(FormBuilder)

formulario:FormGroup = this.formbuilder.group({
AreaID: new FormControl(null),
NombreArea: new FormControl(null),
EncargadoID:new FormControl(null)

})

Enviar(){
  if(this.formulario.valid){

  }
}

Eliminar (){

}
}
