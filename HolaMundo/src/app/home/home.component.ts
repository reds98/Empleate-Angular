import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  personasInscritas:Array<string>=["Julian","Daylin"]
  
  addItem(elemento:string){
    this.personasInscritas.push(elemento)
  }

}
