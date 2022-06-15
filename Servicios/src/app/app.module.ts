import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionPrincipalComponent } from './seccion-principal/seccion-principal.component';
import { SeccionSecundariaComponent } from './seccion-secundaria/seccion-secundaria.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionPrincipalComponent,
    SeccionSecundariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
