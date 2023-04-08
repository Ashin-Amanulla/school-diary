import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  // api: string = environment.api
  api:string= 'http://localhost:3400/api'
  // for production 
  // api: string = '/api'

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return true
  }

  login(item:any) {
    return this.http.post(`${this.api}/auth`, item)
  }
}
