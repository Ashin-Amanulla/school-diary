import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BackendService } from 'src/app/dashboard/backend.service';

@Component({
  selector: 'app-announcement-view',
  templateUrl: './announcement-view.component.html',
  styleUrls: ['./announcement-view.component.scss']
})
export class AnnouncementViewComponent {
  modalItem: any = ''

constructor(public route:Router, private api:BackendService , private auth:AuthService){}

ngOnInit() {
   let id = localStorage.getItem('announcement_id');
  this.api.getOneNotice(id).subscribe((res: any) => {
    this.modalItem  = res.data[0]
   console.log(this.modalItem)
  })

}

isAuthorized():boolean{
  return this.auth.isAdmin()
}

  editItem(id: any) {
    localStorage.setItem('announcement_id', id)

    this.route.navigate(['dashboard/announcement-edit']);
  }


}
