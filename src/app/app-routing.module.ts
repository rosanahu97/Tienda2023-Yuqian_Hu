import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [  
  {path:'categoria',component:CategoriaComponent},
  {path:'categoria/:id/:op',component:FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
