import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'FormularioTrabajador',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioTrabajador {

private formbuilder:FormBuilder=inject(FormBuilder)

formulario: FormGroup= this.formbuilder.group({
  TrabajadorID: new FormControl(null),
  Nombre: new FormControl(null,[Validators.required]),
  Apellido_paterno: new FormControl(null),
  Apellido_materno: new FormControl(null),
  FechaNacimiento: new FormControl(null),
  Calle: new FormControl(null),
  Numero: new FormControl(null),
  Colonia: new FormControl(null),
  Codigo_postal: new FormControl(null),
  Puesto: new FormControl(null,[Validators.required]),
  Sueldo: new FormControl(null,[Validators.required]),
  Cuenta_banco: new FormControl(null),
  FechaIngreso: new FormControl(null,[Validators.required]),
  FechaSalida: new FormControl(null),
  AreaID: new FormControl(null,[Validators.required]),
  BancoID: new FormControl(null),
  SupervisorID: new FormControl(null),
  DiasVacacionesPermitidos: new FormControl(null),
  DiasVacacionesRestantes: new FormControl(null),

  subtrabajadores: new FormArray([])

})

subtrabajdor(id:string): FormGroup{
  return this.formbuilder.group({
  TrabajadorID: new FormControl(null,[Validators.required]),
  SupervisorID: new FormControl(id,[Validators.required]),
  })
}

agregar_subtrabajador(id:string){
  this.obtener_subtrabajdores().push(this.subtrabajdor(id))
}

eliminar_subtrabajador(indice:number){
this.obtener_subtrabajdores().removeAt(indice)
}

obtener_subtrabajdores(): FormArray{
  return this.formulario.controls['subtrabajadores'] as FormArray
}
enviar_formualrio(){
  if(this.formulario.valid)
  console.log(this.formulario.value)
}

Eliminar(){

}
}
