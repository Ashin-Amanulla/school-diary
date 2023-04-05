import { Component } from '@angular/core';
import { BackendService } from '../../backend.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pupils-view',
  templateUrl: './pupils-view.component.html',
  styleUrls: ['./pupils-view.component.scss']
})
export class PupilsViewComponent {
  item: any
  reviewForm!: FormGroup
  constructor(private fb: FormBuilder, public api: BackendService, private router: Router) {
    this.reviewForm = this.fb.group({
      review: ['', Validators.required],
      studentId:['',Validators.required]
    })
  }

  ngOnInit() {

    let id = localStorage.getItem('pupil_id')
    this.api.getOneItems(id).subscribe((res: any) => {
      this.item = res.data[0]
    });
  }

  reviewSubmit() {
    this.reviewForm.value.studentId = localStorage.getItem('pupil_id')
    console.log(this.reviewForm.value)

  }
  editItem(id: any) { }
}
