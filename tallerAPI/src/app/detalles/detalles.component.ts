import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioJuegosService } from '../servicio-juegos.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  valorDelLink:string=""
  informacionRecibida:any=""

  constructor(private ruta:ActivatedRoute,private servicio:ServicioJuegosService) { 
    this.ruta.params.subscribe((data:any)=>{
      this.valorDelLink=data.value
      this.servicio.getInformacionDetallada(this.valorDelLink).subscribe((info:any)=>{
        this.informacionRecibida=info
      })
    })
  }

  ngOnInit(): void {
  }

}
