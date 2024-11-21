import { Routes } from '@angular/router';
import { TrabajadoresComponent } from './vistas/privado/trabajador/trabajador.component';
import { FormularioTrabajador } from './vistas/privado/trabajador/formulario/formulario.component';
import { AreasComponent } from './vistas/privado/area/area.component';
import { FormularioArea } from './vistas/privado/area/formulario/formulario.component';
import { BancosComponent } from './vistas/privado/banco/banco.component';
import { FormularioBanco } from './vistas/privado/banco/formulario/formulario.component';
import { VacacionesComponent } from './vistas/privado/vacacion/vacacion.component';
import { FormularioVacacion } from './vistas/privado/vacacion/formulario/formulario.component';

export const routes: Routes = [

  {
    path:'trabajador',
    children:[
      {
        path:'lista',
        component:TrabajadoresComponent
      },
      {
        path:'detalle/:id',
        component:FormularioTrabajador
      },
      {
        path:'agregar',
        component:FormularioTrabajador
      },
      {
        path:'',
        redirectTo:'lista',
        pathMatch:'prefix'
      }
    ]
  },
  {
    path:'area',
    children:[
      {
        path:'lista',
        component:AreasComponent
      },
      {
        path:'detalle/:id',
        component:FormularioArea
      },
      {
        path:'agregar',
        component:FormularioArea
      },
      {
        path:'',
        redirectTo:'lista',
        pathMatch:'prefix'
      }
    ]
  },
  {
    path:'banco',
    children:[
      {
        path:'lista',
        component:BancosComponent
      },
      {
        path:'detalle/:id',
        component:FormularioBanco
      },

      {
        path:'agregar',
        component:FormularioBanco
      },
      {
        path:'',
        redirectTo:'lista',
        pathMatch:'prefix'
      }
    ]
  },
  {
    path:'vacacion',
    children:[
      {
        path:'lista',
        component:VacacionesComponent
      },
      {
        path:'detalle/:id',
        component:FormularioVacacion
      },
      {
        path:'agregar',
        component:FormularioVacacion
      },
      {
        path:'',
        redirectTo:'lista',
        pathMatch:'prefix'
      }
    ]
  },
  {
    path:'', redirectTo:'trabajador',pathMatch:'prefix'
  }
];
