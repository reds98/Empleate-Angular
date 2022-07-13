import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs:any[]=[];

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getTrendingGif().subscribe((data:any)=>{
      this.gifs=data.data
      console.log("GIFS ",this.gifs)
    })
  }

}
