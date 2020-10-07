import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'myapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginsService: LoginService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  onSubmit() {
    this.loginsService
      .login(this.form.value)
      .subscribe((res) => console.log(res, 'login'));
  }

  navigateRegistration() {
    this.router.navigate(['/auth/registration']);
  }
}
