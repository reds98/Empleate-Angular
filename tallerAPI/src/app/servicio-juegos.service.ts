import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioJuegosService {

  constructor(private http:HttpClient) {

   }
   getInformacionGames(){
    return this.http.get("https://api.rawg.io/api/games?key=73a7407d4e6d457a9e7d357e00ff02d8")
  }
 
  getInformacionBusqueda(valorBusqueda:string){
    // return this.http.get("https://api.rawg.io/api/games?key=73a7407d4e6d457a9e7d357e00ff02d8&search="+valorBusqueda)
    return this.http.get(`https://api.rawg.io/api/games?key=73a7407d4e6d457a9e7d357e00ff02d8&search=${valorBusqueda}`)

  }
}
