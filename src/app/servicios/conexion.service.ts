import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConexionService {
  private http: HttpClient = inject(HttpClient);

  peticion(metodo: string, controller: string, opcion: string, datos?: any) {
    const url =
      window.location.protocol +
      '//' +
      window.location.hostname +
      '/Servicios_Alexis/controller/';
    return new Promise((resolve) => {
      this.http
        .request(metodo, url + controller + '.php?opcion=' + opcion, {
          body: metodo == 'post' ? datos : undefined,
          params: metodo != 'post' ? datos : undefined,
        })
        .subscribe((respuesta: any) => resolve(respuesta));
    });
  }
}
