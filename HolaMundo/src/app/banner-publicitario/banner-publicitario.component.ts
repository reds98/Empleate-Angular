import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-publicitario',
  templateUrl: './banner-publicitario.component.html',
  styleUrls: ['./banner-publicitario.component.css']
})
export class BannerPublicitarioComponent  {
  company:string="BurgerKing"
  precio:number=150

  incrementarPrecio(){
    this.precio=this.precio*10
    
  }

}
