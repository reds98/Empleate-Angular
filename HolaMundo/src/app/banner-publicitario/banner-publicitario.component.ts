import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-publicitario',
  templateUrl: './banner-publicitario.component.html',
  styleUrls: ['./banner-publicitario.component.css']
})
export class BannerPublicitarioComponent  {
  company:string=""
  precio:number=150

  incrementarPrecio(){
    this.precio=this.precio+10
  }
  escojerCoca(){
    this.company="CocaCola"
  }
  escojerPepsi(){
    this.company="Pepsi"
  }

}
