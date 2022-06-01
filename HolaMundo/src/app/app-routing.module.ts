import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"info",component:InformacionComponent},
  {path:"servicios",component:ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
