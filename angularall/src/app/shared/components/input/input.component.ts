import {
  DoCheck,
  Inject,
  OnChanges,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { getInputUnsupportedTypeError } from '../../utils/error';
import { MyFormFieldControl } from '../z_models/formfield';
import {
  INPUT_VALUE_ACCESSOR,
  MAT_INPUT_INVALID_TYPES,
  nextUniqueIdValueInput,
  nextUniqueNameValueInput,
} from '../z_models/input';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'myapp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{ provide: MyFormFieldControl, useExisting: InputComponent }],
})
export class InputComponent
  implements
    MyFormFieldControl<string>,
    ControlValueAccessor,
    DoCheck,
    OnDestroy,
    OnChanges,
    OnInit {
  protected _uid = `input-${nextUniqueIdValueInput()}`;
  protected _uName = `input-${nextUniqueNameValueInput()}`;
  private _inputValueAccessor: { value: any };

  stateChanges: Subject<void> = new Subject();
  focused: boolean;
  errorState = false;

  @ViewChild('inputElement') protected _inputElement: ElementRef<
    HTMLInputElement
  >;

  @Input()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value || (this.ngControl?.name as string) || this._uName;
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

  get empty(): boolean {
    return !this._inputElement.nativeElement.value;
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value ? value : '';
  }

  protected _placeholder: string;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required =
      (value != null && `${value}` !== 'false') ||
      !!this.ngControl.getError('required');
  }
  protected _required: boolean;

  @Input() class?: string;

  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value != null && `${value}` !== 'false';
  }
  protected _disabled: boolean;

  @Input()
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value || '';
    this.onChange(value);
    this.stateChanges.next();
  }

  protected _value: string;

  @Input()
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value || 'text';
    this._validateType();
  }

  protected _type = 'text';

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    @Optional() @Self() @Inject(INPUT_VALUE_ACCESSOR) inputValueAccessor: any
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
      this.required = this._required;
    }
    this._inputValueAccessor = inputValueAccessor;
    this.id = this._id;
    this.name = this._name;
  }
  ngOnInit(): void {
    if (
      this.ngControl &&
      this.ngControl.errors !== null &&
      !!this.ngControl.getError('required')
    ) {
      this._required = true;
    } else {
      this._required = false;
    }
  }

  _checkPlaceholder() {
    if (this._inputElement) {
      this._placeholder?.length > 0
        ? this._inputElement.nativeElement.setAttribute(
            'placeholder',
            this._placeholder
          )
        : this._inputElement.nativeElement.removeAttribute('placeholder');
    }
  }
  // tslint:enable:no-host-decorator-in-concrete
  focusChanged(isFocused: boolean) {
    if (isFocused !== this.focused && (!this.disabled || !isFocused)) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
    this.onTouch();
  }

  onChange: (_: any) => void = (_: any) => {};
  onTouch: () => void = () => {};

  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this.type) > -1) {
      throw getInputUnsupportedTypeError(this._type);
    }
  }

  onContainerClick(event: MouseEvent): void {
    this._inputElement.nativeElement.focus();
  }
  writeValue(value: string): void {
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

  ngDoCheck() {
    this._checkPlaceholder();
  }
  ngOnChanges() {
    this.stateChanges.next();
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}
