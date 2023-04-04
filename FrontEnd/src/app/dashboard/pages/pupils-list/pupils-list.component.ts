import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pupils-list',
  templateUrl: './pupils-list.component.html',
  styleUrls: ['./pupils-list.component.scss']
})
export class PupilsListComponent {
  constructor(private route: Router) { }

pupils:any
  //redirect to add form
  addItem() {
    this.route.navigate(['dashboard/add-new'])
  }


  ngOnInit(){
    this.getData()

  }


getData(){
// this.api.getData().subscribe((res:any)=>{
//   console.log(res)
//   this.products= res.data
// })
}

//delete

deleteItem(id:any){
  // this.api.deleteItem(id).subscribe((res:any)=>{
    alert('Deleted Successfully!!!')
    this.pupils = this.pupils.filter((e:any)=>e._id !== id)
  // })
}


viewItem(id:any){
  this.route.navigate(['dashboard/view-item']);

}

logout(){
  localStorage.removeItem('token')
  this.route.navigate(['/login']);
}

}
