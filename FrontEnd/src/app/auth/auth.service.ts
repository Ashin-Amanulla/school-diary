import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api: string = 'http://localhost:3400/api'

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return true
  }

  login(item:any) {
    return this.http.post(`${this.api}/auth`, item)
  }
}
