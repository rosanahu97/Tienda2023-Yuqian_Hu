import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConexionService } from './servicio/conexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda';
  listado: any[] = [];
  constructor(private conexion: ConexionService) {
    const dato: Observable<any> = this.conexion.leerApi('Categoria');
    console.log("entro en listado");
    dato.subscribe((resp: any) => {
      this.listado = resp;
      console.log(this.listado);
    })

  }
}
