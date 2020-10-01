import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'myapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }
  onSubmit() {
    console.log(this.form);
  }

  navigateRegistration() {
    this.router.navigate(['/auth/registration']);
  }
}
