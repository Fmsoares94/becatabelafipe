import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 export interface Marcas {
  key: string,
  id: number,
  fipe_name: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  link: string = 'https://fipeapi.appspot.com/api/1/carros/'

  constructor(private http: HttpClient) { }

  getMarcas() {
    return this.http.get<Marcas>(`${this.link}marcas.json`)
  }
  carrosPorId(id:number) {
    return this.http.get<Marcas>(`${this.link}veiculos/${id}.json`)
  }
}
