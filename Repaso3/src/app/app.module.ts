import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearInvitadoComponent } from './crear-invitado/crear-invitado.component';
import { ListaInvitadosComponent } from './lista-invitados/lista-invitados.component';
import { TarjetaInvitadoComponent } from './tarjeta-invitado/tarjeta-invitado.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearInvitadoComponent,
    ListaInvitadosComponent,
    TarjetaInvitadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
