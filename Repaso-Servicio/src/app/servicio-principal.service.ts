import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrincipalService {
  
  constructor(private http:HttpClient) { }

  obtenerImagenRandom(){
    return this.http.get("https://dog.ceo/api/breeds/image/random")
  }

  obtenerRazasPerro(){
    return this.http.get("https://dog.ceo/api/breeds/list/all")
  }

  

}
