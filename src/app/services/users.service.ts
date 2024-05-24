import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string = 'http://localhost:8080/user';

  constructor(private httpClient: HttpClient) { }

  signup = (name: string, login: string, password: string) => {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { name, login, password }).pipe(
      tap((value) => {
        localStorage.setItem("auth_token", value.token);
      })
    )
  }

  getAllUsers = () => {
    const url = this.apiUrl
    return this.httpClient.get(url)
  }
}
