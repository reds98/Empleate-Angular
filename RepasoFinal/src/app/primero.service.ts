import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PrimeroService {
  nombreUsuario:string='Ricardo'

  constructor(private http :HttpClient) { }

  getChistesChuckNorris(){
    return this.http.get("https://api.chucknorris.io/jokes/random")
  }
  
}
