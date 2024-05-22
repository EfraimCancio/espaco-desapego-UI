import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = 'http://localhost:8080/produtos';

  constructor(private httpClient: HttpClient) { 
    
  }

  getActiveProducts() {
    const url = this.apiUrl + '/ativos'
    return this.httpClient.get(url)
  }
}
