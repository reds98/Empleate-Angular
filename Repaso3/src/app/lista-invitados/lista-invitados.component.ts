import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-lista-invitados',
  templateUrl: './lista-invitados.component.html',
  styleUrls: ['./lista-invitados.component.css']
})
export class ListaInvitadosComponent  {
  @Input()nombresPersonas:Array<string>=[]
  @Input()edadesPersona:Array<number>=[]

 

}
