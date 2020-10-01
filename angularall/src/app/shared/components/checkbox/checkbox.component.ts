import { Attribute, forwardRef } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { nextUniquValueIdCheckbox } from '../z_models/input';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'myapp-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent
  implements ControlValueAccessor, OnDestroy, OnChanges, Validator {
  protected _uid = `checkbox-${nextUniquValueIdCheckbox()}`;
  protected _uName = `checkbox-${nextUniquValueIdCheckbox()}`;
  public stateChanges: Subject<void> = new Subject();
  color_0 = '#27FDC7';
  color_100 = '#0FC0F5';

  @ViewChild('checkBox', { static: true }) protected _checkBox: ElementRef;

  @Input()
  get value() {
    return this._value;
  }
  set value(value: boolean) {
    this._value = value != null && `${value}` !== 'false';
    this.stateChanges.next();
    this.onChange(value);
    this.onValidatorChange();
  }
  protected _value = false;

  @Input()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value || this._uName;
  }
  protected _name: string;
  @Input()
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value || this._uid;
  }
  protected _id: string;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = value != null && `${value}` !== 'false';
  }
  protected _required: boolean;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    if (value) {
      this.color_0 = '#fc5c65';
      this.color_100 = '#ff4757';
    }
    this._disabled = value != null && `${value}` !== 'false';
  }
  protected _disabled: boolean;

  @Input()
  class: string;

  @Input()
  label = '';

  @Input()
  costumeValidator = false;

  public ngControl: AbstractControl;

  constructor(@Attribute('tabindex') public tabIndex: string) {
    tabIndex = tabIndex || '0';
    this.id = this.id;
    this.name = this.name;
    this.disabled = this.disabled;
  }

  onValidatorChange: () => void = () => {};
  validate(control: AbstractControl): ValidationErrors {
    this.ngControl = control;
    return control.errors;
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  ngOnChanges() {
    this.stateChanges.next();
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  onChange: (_: any) => void = (_: any) => {};
  onTouch: () => void = () => {};

  onContainerClick(event: MouseEvent): void {
    this._checkBox.nativeElement.focus();
  }
  writeValue(value: boolean): void {
    if (value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
