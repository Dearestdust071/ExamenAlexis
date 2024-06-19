import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';



@Component({
  providers: [provideNativeDateAdapter()],
  selector: 'FormularioVacacion',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioVacacion {
  private formbuilder: FormBuilder = inject(FormBuilder)

  formulario: FormGroup = this.formbuilder.group({
    VacacionesID: [null],
    TrabajadorID: [null, [Validators.required]],
    FechaInicio: [null, [Validators.required]],
    FechaFin: [null, [Validators.required]],

  })

  Enviar() {
    if (this.formulario.valid) {

    }
  }

  //es el cliclo de vida que se ejecuta cuando se inicia el componente
  ngOnInit() {
    this.formulario.controls["FechaFin"].valueChanges.subscribe((dato: any) => {
      setTimeout(() => {
      if (this.formulario.value.FechaInicio && this.formulario.value.FechaFin) {

          let date1 = new Date(this.formulario.value.FechaInicio).getTime();
        let date2 = new Date(this.formulario.value.FechaFin).getTime();
        console.log(Math.round(Math.abs((date2-date1)/86400000)))
        
        
      }
    }, 150);

    })
  }

}
