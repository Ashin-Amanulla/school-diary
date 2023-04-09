import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode"



interface MyToken {
  admin: boolean,
  email: string,
  login: boolean

  // whatever else is in the JWT.
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // api: string = environment.api
  api: string = 'http://localhost:3400/api'
  // for production 
  // api: string = '/api'

  constructor(private http: HttpClient) { }


  // login check 
  isLoggedIn(): boolean {
    var token = localStorage.getItem('accessToken') || '';

    try {
      var user = jwt_decode<MyToken>(token);
      return user.login ? true : false;

    } catch (error) {
      console.log('Token error', error)
      return false
    }
  }


  // role check 
  isAdmin(): boolean {
    var token = localStorage.getItem('accessToken') || '';

    try {
      var user = jwt_decode<MyToken>(token);
      return user.admin ? true : false;

    } catch (error) {
      console.log('Token error', error)
      return false
    }

  }

 async  emailDecode(){
    var token = localStorage.getItem('accessToken') || '';

    try {
      var user = jwt_decode<MyToken>(token);
      return user.email.toLowerCase();

    } catch (error) {
      console.log('Token error', error)
      return 'false'
    }


  }
   async getOneItems() {
    let email = await  this.emailDecode()
    console.log('rest',email)
    return this.http.get(`${this.api}/pupils/sideBar/${email}`)


  }

  login(item: any) {
    return this.http.post(`${this.api}/auth`, item)
  }
}
