import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ListPokemonScreenComponent } from './list-pokemon-screen/list-pokemon-screen.component';
import { SpecificPokemonComponent } from './specific-pokemon/specific-pokemon.component';
const routes: Routes = [
{path:'home',component:HomeScreenComponent},
{path:'list',component:ListPokemonScreenComponent},
{path:'specific',component:SpecificPokemonComponent},
{path:'',component:HomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
