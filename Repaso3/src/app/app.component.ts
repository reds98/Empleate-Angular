import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombresRecibidos:Array<string>=['Maria']
  edadRecibidas:Array<number>=[20]

  agregarNombreRecibido(nombreRecibido:string){
    this.nombresRecibidos.push(nombreRecibido)
  }
  agregarEdadRecibida(edadRecibida:number){
    this.edadRecibidas.push(edadRecibida)
  }
}
