import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NurseryStudent } from './interface/pupils';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  api: string = 'http://localhost:3400/api'

  constructor(private http: HttpClient) { }

  addItem(item: NurseryStudent) {
    return this.http.post(`${this.api}/pupils`, item)
  }


  //get all data

  getItems() {
    return this.http.get(`${this.api}/pupils`)

  }

  //getOne all data

  getOneItems(id:any) {
    return this.http.get(`${this.api}/pupils/${id}`)

  }

  // delete 


  deleteItem(id: any) {
    return this.http.delete(`${this.api}/pupils/${id}`)
  }


  // updateItem 
  updateItem(id: any, item: NurseryStudent) {
    return this.http.put(`${this.api}/pupils/${id}`, item)
  }
}
