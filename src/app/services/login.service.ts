import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  apiUrl: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  login(login: string, password: string): Observable<any> {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { login, password }).pipe(
      tap((value) => {
        console.log('Access token: ', value);
        localStorage.setItem("auth_token", value.token);
      })
    )
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  get isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }

  getToken(): string | null {
    const token = localStorage.getItem('access_token');
    return token
  }

}
