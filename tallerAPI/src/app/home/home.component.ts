import { Component, OnInit } from '@angular/core';
import { ServicioJuegosService } from '../servicio-juegos.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  informacionRecibida:any=""

  constructor(private servicio:ServicioJuegosService) {
    servicio.getInformacionGames().subscribe((data)=>{
      this.informacionRecibida=data
    })
   }

  ngOnInit(): void {
  }

}
