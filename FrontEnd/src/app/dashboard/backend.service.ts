import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  api: string = 'http://localhost:3400/api'

  constructor(private http: HttpClient) { }

addItem(item: any) {
  return this.http.post(`${this.api}/pupils`, item )
}


//get all data

getItems() {
  return this.http.get(`${this.api}/pupils`)

}

//getOne all data

getOneItems(id: any) {
  return this.http.get(`${this.api}/pupils/${id}`)

}

// delete 


deleteItem(id: any) {
  return this.http.delete(`${this.api}/pupils/${id}`)
}


// updateItem 
updateItem(id: any, item: any) {
  return this.http.put(`${this.api}/pupils/${id}`, item)
}


//?remarks

addRemarks(item: any) {
  return this.http.post(`${this.api}/remarks`, item )
}
getRemarks(id: any) {
  return this.http.get(`${this.api}/remarks/${id}` )
}


//comments
postComment(item:any){
  return this.http.post(`${this.api}/comments` , item )

}



//announcements
addNotice(item: any) {
  return this.http.post(`${this.api}/announcements`, item )
}


//get all data

getNotice() {
  return this.http.get(`${this.api}/announcements`)

}

//getOne all data

getOneNotice(id: any) {
  return this.http.get(`${this.api}/announcements/${id}`)

}

// delete 


deleteNotice(id: any) {
  return this.http.delete(`${this.api}/announcements/${id}`)
}


// updateItem 
updateNotice(id: any, item: any) {
  return this.http.put(`${this.api}/announcements/${id}`, item)
}
}
