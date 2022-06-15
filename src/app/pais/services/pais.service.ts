import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl: string = 'https://restcountries.com/v3.1';
  private httpParams: HttpParams = new HttpParams();

  constructor(private http: HttpClient) {
    this.httpParams.set('fields', 'name,capital,population,cca2,flag,flags');
  }

  buscarPais(termino: string): Observable<Country[]> {

    const endpoint = `${this.baseUrl}/name/${termino}`;

    return this.http.get<Country[]>(endpoint, { params: this.httpParams });

  }

  buscarCapital(termino: string) {
    const endpoint = `${this.baseUrl}/capital/${termino}`;
    return this.http.get<Country[]>(endpoint, { params: this.httpParams });
  }

  getPaisPorCodigo(id: string): Observable<Country[]> {
    const endpoint = `${this.baseUrl}/alpha/${id}`;
    return this.http.get<Country[]>(endpoint);
  }

  getPaisesPorRegion(region: string): Observable<Country[]> {
    const endpoint = `${this.baseUrl}/region/${region}`;
    return this.http.get<Country[]>(endpoint, { params: this.httpParams });
  }
}
