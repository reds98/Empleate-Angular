import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PrimeroService } from '../primero.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input()nombre:string="clase1"
  precio:number=15
  nombres:Array<string>=["juan","Maria","Daniel"]
  informacion:any=''
  constructor(private usuario:PrimeroService) {
    this.usuario.getChistesChuckNorris().subscribe((data)=>{
      this.informacion=data
    })
   }

  ngOnInit(): void {
  }
  Saludar(){
    alert("Saludando desde el componente")
  }

}
