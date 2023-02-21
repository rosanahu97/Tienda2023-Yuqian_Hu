import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Categoria } from 'src/app/modelo/categoria';
import { ConexionService } from 'src/app/servicio/conexion.service';

import { CategoriaComponent } from './categoria.component';

describe('CategoriaComponent', () => {
  let component: CategoriaComponent;
  let fixture: ComponentFixture<CategoriaComponent>;
  let comunicaciones: ConexionService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [ConexionService]

    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let categoria:Categoria={
    id_categoria:0,
    cat_nombre:"",
    cat_descripcion:""
  }



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
