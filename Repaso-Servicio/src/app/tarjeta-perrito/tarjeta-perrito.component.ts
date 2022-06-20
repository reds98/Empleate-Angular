import { Component, OnInit } from '@angular/core';
import { ServicioPrincipalService } from '../servicio-principal.service';
@Component({
  selector: 'app-tarjeta-perrito',
  templateUrl: './tarjeta-perrito.component.html',
  styleUrls: ['./tarjeta-perrito.component.css']
})
export class TarjetaPerritoComponent implements OnInit {

  informacionRecibida:any={}

  constructor(private variableServicio:ServicioPrincipalService) {
    variableServicio.obtenerImagenRandom().subscribe((data)=>{
      this.informacionRecibida=data
    })
   }
   obtenerImagenNueva(){
    this.variableServicio.obtenerImagenRandom().subscribe((data)=>{
      this.informacionRecibida=data
    })
   }

  ngOnInit(): void {
  }

}
