import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  nextUniqueIdValueInput,
  nextUniqueNameValueInput,
} from '../z_models/input';

@Component({
  selector: 'myapp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements AfterViewInit {
  protected _uid = `button-${nextUniqueIdValueInput()}`;
  protected _uName = `button-${nextUniqueNameValueInput()}`;

  @ViewChild('button') buttonEl: ElementRef;

  @Input()
  title: string;

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
  class?: string;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value != null && `${value}` !== 'false';
  }
  protected _disabled: boolean;

  @Input()
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value || 'button';
  }
  protected _type: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClick = new EventEmitter<Event>();

  @Input()
  dynamicColor = '#03e9f4';

  constructor() {
    /*Call the setters*/
    this.id = this._id;
    this.name = this._name;
  }

  ngAfterViewInit(): void {
    this.buttonEl.nativeElement.style.setProperty(
      '--button-dynamic',
      this.dynamicColor
    );
  }

  onClickButton(event) {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}
