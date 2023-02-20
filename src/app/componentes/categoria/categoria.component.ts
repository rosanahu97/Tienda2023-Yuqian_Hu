import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../../modelo/categoria';
import { ConexionService } from '../../servicio/conexion.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  //definimos las listas para guardar todas las categorias y categorias filtradas
  listado: Categoria[] = [];
  listaAMostrar:Categoria[]=[];
  //definimos una variable booleana para controlar la busqueda
  estaBuscando:boolean =false;
  //Esta variable hace referencia a la de input 
  c_nombre :string ="";

  constructor(private conexion: ConexionService) {
    const dato: Observable<any> = this.conexion.leerApi('Categoria');
     dato.subscribe((resp: any) => {
      this.listado=resp as Categoria[];
      this.listaAMostrar=this.listado;
    });
}

//cuando pulsamos el buton buscar, se llama a la funcion filtrar para devolver la lista filtrada
//devuelve la categoria con nombre = caracteres introducido, es posible devuelve una lista vacia
filtrar(){
  this.estaBuscando=true;
  let listadoFiltrado:Categoria[]=[];

  this.listado.forEach((cat) =>{
    if(cat.cat_nombre.includes(this.c_nombre)){
      listadoFiltrado.push(cat);
    }
  })
  this.listaAMostrar= listadoFiltrado;

}
/*Control de evento,cuando borra la busqueda, borra tambien la lista de las categorias filtrados
y se vuelve a mostrar la lista de categoria entera
*/ 
onChange(event:any){
  if(this.c_nombre.length==0){
    this.estaBuscando=false;
    this.listaAMostrar=this.listado
  }

}
}
