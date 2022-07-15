import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() nombreJuego:string=""
  @Input() imagenJuego:string=""
  @Input()idJuego:string=""

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irADetalles(){
    this.router.navigate(["details",this.idJuego])
  }

}
