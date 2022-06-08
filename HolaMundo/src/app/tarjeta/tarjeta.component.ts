import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent  {
  @Input() nombre:string='Ricardo'
  @Input() edad:number=20
  fechaNacimiento:string="05/06/2000"

}
