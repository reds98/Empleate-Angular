import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { BannerPublicitarioComponent } from './banner-publicitario/banner-publicitario.component';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TarjetaContactoComponent } from './tarjeta-contacto/tarjeta-contacto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    BannerPublicitarioComponent,
    HomeComponent,
    InformacionComponent,
    ServiciosComponent,
    TarjetaContactoComponent,
    FormularioComponent,
    ConsultasComponent,
    ErrorPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
