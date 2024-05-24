import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl: string = 'http://localhost:8080/categorias';

  constructor(private httpClient: HttpClient) {

  }

  getActiveCategories = () => {
    const url = this.apiUrl + '/ativos'
    return this.httpClient.get(url)
  }
}
