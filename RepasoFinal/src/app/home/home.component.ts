import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  guardarNombre:string=""
  
  recibirNombre(dato:string){
    this.guardarNombre=dato
  }
  constructor() { }

  ngOnInit(): void {
  }

}
