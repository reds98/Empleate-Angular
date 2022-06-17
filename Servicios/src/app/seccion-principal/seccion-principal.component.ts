import { Component, OnInit } from '@angular/core';
import { ServicioInformacionService } from '../servicio-informacion.service';
@Component({
  selector: 'app-seccion-principal',
  templateUrl: './seccion-principal.component.html',
  styleUrls: ['./seccion-principal.component.css']
})
export class SeccionPrincipalComponent implements OnInit {

  informacionRecibida:any={}
  constructor(private variableServicio:ServicioInformacionService) { 
    variableServicio.obtenerDatosRandom().subscribe((data)=>{
      this.informacionRecibida=data
      console.log("sasas")
    })
   
  }
  actualizarDato(){
    this.variableServicio.obtenerDatosRandom().subscribe((data)=>{
      this.informacionRecibida=data
      console.log("sasas")
    })
  }

  ngOnInit(): void {
  }

}
