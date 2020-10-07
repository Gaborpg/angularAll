import { LoginService } from './../../services/login.service';
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
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginsService: LoginService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      placeOfBirth: [null, Validators.required],
      postcode: [null, Validators.required],
      city: [null, Validators.required],
      mobileNumber: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      passwordAgain: [null, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.form);
    this.loginsService
      .addUser(this.form.value)
      .subscribe((res) => console.log(res));
  }

  navigateBack() {
    this.router.navigate(['/auth/login']);
  }
}
