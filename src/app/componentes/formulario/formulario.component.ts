import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/modelo/categoria';
import { ConexionService } from 'src/app/servicio/conexion.service';



const op_insertar: string = "Insertar ";
const op_eliminar: string = "Eliminar ";
const op_actualizar: string = "Actualizar ";
const op_error: string = "Error";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent {
  //se muestra como titulo de la pagina
  opcion: string = "";
  id: number = 0;
  //readonly campo id
  soloLectura:boolean=false;
  //readonly campo nombre y descripcion
  estoyEliminando:boolean=false;
  //para ocultar el campo id en caso de insertar
  estoyInsertando:boolean=false;

  categoria: Categoria = { id_categoria: 0, cat_nombre: "", cat_descripcion: "" };

  constructor(private route: ActivatedRoute, private conexionService: ConexionService) {
    //coger los parametros de la ruta y buscar la categoria por id
    let p1 = route.snapshot.paramMap.get('id');
    if (p1 !== "0") {
      let op = route.snapshot.paramMap.get('op');
        const dato: Observable<any> = this.conexionService.leerApi('Categoria/'+p1);
        dato.subscribe((resp: any) => {
        this.categoria=resp.Categoria as Categoria;
        });
      if (op === "act") {
        this.opcion = op_actualizar;
        this.soloLectura=true;
      } else if (op === "del") {
        this.opcion = op_eliminar;
        this.soloLectura=true;
        this.estoyEliminando=true;
      }

    } else {
      this.opcion = op_insertar;
      this.estoyInsertando=true;
    }

  }

  insertar() {
      let id = Math.floor(Math.random() * 500) + 2;
      this.categoria.id_categoria=id;
      
      const dato: Observable<any> = this.conexionService.postApi('Categoria',this.categoria);
      dato.subscribe((resp: any) => {
        console.log("ha insertado??"+resp);

      });

  };

  actualizar() { };
  onSubmit() {  };
  cancelar() { };



}
