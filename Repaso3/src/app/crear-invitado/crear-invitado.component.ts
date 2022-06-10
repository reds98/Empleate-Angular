import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-invitado',
  templateUrl: './crear-invitado.component.html',
  styleUrls: ['./crear-invitado.component.css']
})
export class CrearInvitadoComponent  {
   @Output()enviarPersona=new EventEmitter<string>()
   @Output()enviarEdad=new EventEmitter<number>()
  enviarInvitado(nombre:string,edad:string){
    this.enviarPersona.emit(nombre)
    this.enviarEdad.emit(parseInt(edad))
  }
}
