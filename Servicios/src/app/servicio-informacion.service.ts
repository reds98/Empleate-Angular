import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioInformacionService {
  

  constructor(private http:HttpClient) { }

  obtenerDatosRandom(){
    return this.http.get("https://catfact.ninja/fact")
  }
  obtenerRazasGatos(){
    return this.http.get("https://catfact.ninja/breeds")
  }
}
