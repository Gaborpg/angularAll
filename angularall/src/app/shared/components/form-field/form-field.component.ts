import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { MyFormFieldControl } from '../models/formfield';
import { getFormFieldMissingControlError } from './error';

@Component({
  selector: 'myapp-form-field',
  exportAs: 'myFormField',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit, AfterContentInit {
  @Input() label?: string;

  @ContentChild(MyFormFieldControl, { static: true })
  _controlStatic: MyFormFieldControl<any>;

  @ContentChild(MyFormFieldControl)
  _controlNonStatic: MyFormFieldControl<any>;
  get _control() {
    // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
    //  We should clean this up once Ivy is the default renderer.
    return (
      this._explicitFormFieldControl ||
      this._controlNonStatic ||
      this._controlStatic
    );
  }
  set _control(value) {
    this._explicitFormFieldControl = value;
  }
  private _explicitFormFieldControl: MyFormFieldControl<any>;

  constructor(private _elementRef: ElementRef) {}
  ngAfterContentInit(): void {
    const control = this._control;
    if (!this._control) {
      throw getFormFieldMissingControlError();
    }
  }
  ngOnInit(): void {}
}
