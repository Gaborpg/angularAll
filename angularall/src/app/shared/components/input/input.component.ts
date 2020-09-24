import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyFormFieldControl } from '../models/formfield';

@Component({
  selector: 'myapp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{ provide: MyFormFieldControl, useExisting: InputComponent }],
})
export class InputComponent
  implements OnInit, MyFormFieldControl<any>, ControlValueAccessor {
  constructor() {}

  value: any;
  stateChanges: Observable<void>;
  id: string;
  placeholder: string;
  ngControl: NgControl;
  focused: boolean;
  empty: boolean;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  controlType?: string;
  onContainerClick(event: MouseEvent): void {
    throw new Error('Method not implemented.');
  }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
}
