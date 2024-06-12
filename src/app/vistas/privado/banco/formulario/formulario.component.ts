import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'FormularioBanco',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioBanco {

private formbuilder: FormBuilder = inject(FormBuilder)

formulario:FormGroup = this.formbuilder.group({
BancoID: new FormControl(null),
Nombre: new FormControl(null, [Validators.required])

})

Enviar(){
  if(this.formulario.valid){

  }
}

Eliminar (){

}

}
