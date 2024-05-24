import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SizesService {

  apiUrl: string = 'http://localhost:8080/tamanho';

  constructor(private httpClient: HttpClient) {
  }

  getActiveSizes = () => {
    const url = this.apiUrl + '/ativos'
    return this.httpClient.get(url)
  }
}
