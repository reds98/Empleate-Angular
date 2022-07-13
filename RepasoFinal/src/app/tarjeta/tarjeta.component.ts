import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Output() canalNombre=new EventEmitter<string>()

  username:string="Mrx666"

  enviarNombre(){
    this.canalNombre.emit(this.username)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
