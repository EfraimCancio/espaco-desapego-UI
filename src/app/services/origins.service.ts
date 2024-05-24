import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OriginsService {

  apiUrl: string = 'http://localhost:8080/origem';

  constructor(private httpClient: HttpClient) {
  }

  getActiveOrigins = () => {
    const url = this.apiUrl + '/ativos'
    return this.httpClient.get(url)
  }
}
