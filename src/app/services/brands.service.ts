import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  apiUrl: string = 'http://localhost:8080/marcas';

  constructor(private httpClient: HttpClient) {

  }

  getActiveBrands = () => {
    const url = this.apiUrl + '/ativos'
    return this.httpClient.get(url)
  }
}
