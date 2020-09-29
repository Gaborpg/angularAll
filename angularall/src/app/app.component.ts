import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angularall';
  public form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      test: [null, [Validators.required, Validators.email]],
      test2: [null, Validators.required],
      test3: [true, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
