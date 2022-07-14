import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioJuegosService } from '../servicio-juegos.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  valordelLink:string=""
  informacionApiBuscada:any=""

  constructor(private route:ActivatedRoute, private servicio:ServicioJuegosService) {
    this.route.params.subscribe((data:any)=>{
      this.valordelLink=data.id
      this.servicio.getInformacionBusqueda(this.valordelLink).subscribe((info:any)=>{
        this.informacionApiBuscada=info
      })
    })
   }

  ngOnInit(): void {
  }

}
