import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ServiciosComponent } from './servicios/servicios.component';
// localhost:4200/info
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"info",component:InformacionComponent},
  {path:"servicios",component:ServiciosComponent},
  {path:"formulario",component:FormularioComponent},
  {path:"",component:HomeComponent},
  {path:"**",component:ErrorPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
