import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  nombre:string='Manuel'
  edad:number=90
  @Output() nuevoCanal = new EventEmitter<string>()

  enviarInformacion(){
    this.nuevoCanal.emit(this.nombre)
    
  }
  


}
