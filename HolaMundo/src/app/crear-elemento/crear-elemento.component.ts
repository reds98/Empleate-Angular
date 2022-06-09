import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-elemento',
  templateUrl: './crear-elemento.component.html',
  styleUrls: ['./crear-elemento.component.css']
})
export class CrearElementoComponent  {
  @Output() canalComunicacion= new EventEmitter<string>()
 

  agregarNombre(elemento:string){
    this.canalComunicacion.emit(elemento)
  }

}
