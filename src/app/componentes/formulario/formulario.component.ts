import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { ConexionService } from 'src/app/servicio/conexion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

categoria:Categoria={id_categoria:0,cat_nombre:"",cat_descripcion:""};

constructor(private route:ActivatedRoute,private conexionService:ConexionService){}

}
