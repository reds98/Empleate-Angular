import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getTrendingGif(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=mZJA8MjBSD46hg7mVQMz2y8nZsE89rJi&limit=25`)
  }
  getTrendingStickers(){
    return this.http.get(`https://api.giphy.com/v1/stickers/trending?api_key=mZJA8MjBSD46hg7mVQMz2y8nZsE89rJi&limit=25`)
  }
}
