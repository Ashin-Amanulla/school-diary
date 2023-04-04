import { Component } from '@angular/core';
import { NurseryStudent } from '../../interface/pupils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.scss']
})
export class PupilsComponent {

  nurseryStudentForm!: FormGroup;

  passwordReg: string = ''
  constructor(private fb: FormBuilder, private api: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.nurseryStudentForm = this.fb.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: [''],
      address: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      image: [''],
      parentName: ['', Validators.required],
      parentPhoneNumber: ['', Validators.required],
      emergencyName: ['', Validators.required],
      emergencyPhoneNumber: ['', Validators.required],
      emergencyRelationship: [''],

    });
  }

  onSubmit() {
    const nurseryStudent: NurseryStudent = this.nurseryStudentForm.value;
    this.api.addItem(nurseryStudent).subscribe((res: any) => {
      if (res.status ) {
        Swal.fire({
          icon: 'success',
          title: ' Added Successfully',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/dashboard/pupils'])
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/dashboard/pupils'])
        })
      }
    })
    // send the nursery student object to your backend API or perform any other action here
  }

  // to auto generate password 
  toPassword() {
    if (this.nurseryStudentForm.value.fullName && this.nurseryStudentForm.value.dateOfBirth) {
      // Capitalize all characters of the name
      const capitalized = this.nurseryStudentForm.value.fullName.toUpperCase();
      // Take the first four characters of the capitalized name
      const shortened = capitalized.slice(0, 4);
      //take year from input
      const year = this.getYearFromDate(this.nurseryStudentForm.value.dateOfBirth);
      this.passwordReg = shortened + '@' + year

    }

  }

  // to take year from dob  
  getYearFromDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    return year;
  }
}
