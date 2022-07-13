import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {
  stcikers:any[]=[];
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getTrendingStickers().subscribe((data:any)=>{
      this.stcikers=data.data
      console.log("GIFS ",this.stcikers)
    })
  }

}
