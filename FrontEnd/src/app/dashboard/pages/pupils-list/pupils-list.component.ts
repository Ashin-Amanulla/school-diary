import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../backend.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pupils-list',
  templateUrl: './pupils-list.component.html',
  styleUrls: ['./pupils-list.component.scss']
})
export class PupilsListComponent {
  constructor(private route: Router, public api: BackendService) { }

  pupils: any
  //redirect to add form
  addItem() {
    this.route.navigate(['dashboard/add-new'])
  }


  ngOnInit() {
    this.getItems()

  }


  getItems() {
    this.api.getItems().subscribe((res: any) => {
      this.pupils = res.data
    })
  }

  //delete

  deleteItem(id: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.deleteItem(id).subscribe(result => {
          this.pupils = this.pupils.filter((item:any) => item._id !== id)
        });
       
      }
    })

   
  }




  viewItem(id: any) {
    localStorage.setItem('pupil_id', id)
    this.route.navigate(['dashboard/view-item']);

  }

  logout() {
    localStorage.removeItem('token')
    this.route.navigate(['/login']);
  }

}