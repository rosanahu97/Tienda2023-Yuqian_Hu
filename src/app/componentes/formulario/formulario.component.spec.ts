import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Categoria } from 'src/app/modelo/categoria';
import { ConexionService } from 'src/app/servicio/conexion.service';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { FormularioComponent } from './formulario.component';
import { from } from 'rxjs';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let espia:any;
  let comunicaciones:ConexionService;

  let categoria:Categoria={
    id_categoria:1,
    cat_nombre:"Test",
    cat_descripcion:""
  }
  let categoriaVacia:Categoria={
    id_categoria:0,
    cat_nombre:"",
    cat_descripcion:""
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,FormsModule],
      providers:[ConexionService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    comunicaciones = TestBed.get(ConexionService);
  });

  let jsonResponse = '{ "id_categoria": 354, "cat_nombre": "Extra", "cat_descripcion": "Prueba 2 - insertar" }';

  it('Comprobar conexion.leerApi',
    async()=>{
        component.categoria=categoria;
        spyOn(comunicaciones,'leerApi').and.callFake(()=>{return from([categoria])});
        //pendiente
        //component.llamarlafuncion
        //expect categoria de la clase = resultado esperado
      }
  );



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
