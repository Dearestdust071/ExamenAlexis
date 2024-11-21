import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'FormularioBanco',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioBanco {

private formbuilder: FormBuilder = inject(FormBuilder)

private router: Router=inject(Router);//nos va a apermitir obtener el link
private activatedrouter: ActivatedRoute = inject(ActivatedRoute);
formulario:FormGroup = this.formbuilder.group({
BancoID: new FormControl(null),
Nombre: new FormControl(null, [Validators.required])

})
ngAfterViewInit(){
  if (this.router.url.includes("detalle")){ //si la ruta incluye la palabra detalle lo vamos a cachar
  // const id = this.activatedrouter.snapshot.queryParamMap.get("id")
  this.activatedrouter.params.subscribe((params:Params)=> {
    const id = params['id'];
    console.log(id);
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
