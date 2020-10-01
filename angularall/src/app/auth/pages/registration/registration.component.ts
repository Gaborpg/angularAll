import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'myapp-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      contracting: this.fb.group({
        name: [null, Validators.required],
        placeOfBirth: [null, Validators.required],
      }),
      address: this.fb.group({
        postcode: [null, Validators.required],
        city: [null, Validators.required],
      }),
      connection: this.fb.group({
        mobileNumber: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
      }),
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  navigateBack() {
    this.router.navigate(['/auth/login']);
  }
}
