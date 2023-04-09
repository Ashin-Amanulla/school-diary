import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
constructor(private router:Router , private auth:AuthService , private api:BackendService){}

item$:any ;
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }

  ngOnInit(){
    this.getIndividualData();

  }

  isAuthorized():boolean{
    return this.auth.isAdmin()
  }
  getIndividualData() {

  this.item$ =  this.auth.getOneItems()
 console.log('Hi',this.item$)
  }

}
