import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ListPokemonScreenComponent } from './list-pokemon-screen/list-pokemon-screen.component';
import { SpecificPokemonComponent } from './specific-pokemon/specific-pokemon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerPrincipalComponent } from './banner-principal/banner-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    ListPokemonScreenComponent,
    SpecificPokemonComponent,
    NavbarComponent,
    FooterComponent,
    BannerPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
