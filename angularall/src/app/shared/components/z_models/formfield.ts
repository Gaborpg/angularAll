import { Observable } from 'rxjs';
import { NgControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class MyFormFieldControl<T> {
  /** The value of the control. */
  value: T | null;

  /**
   * Stream that emits whenever the state of the control changes
   */
  readonly stateChanges: Observable<void>;

  /** The element ID for this control. */
  readonly id: string;

  /** The placeholder for this control. */
  readonly placeholder: string;

  /** Gets the NgControl for this control. */
  readonly ngControl: NgControl | null;

  /** Whether the control is focused. */
  readonly focused: boolean;

  /** Whether the control is empty. */
  readonly empty: boolean;

  /** Whether the control is required. */
  readonly required: boolean;

  /** Whether the control is disabled. */
  readonly disabled: boolean;

  /** Whether the control is in an error state. */
  readonly errorState?: boolean;

  /** Handles a click on the control's container. */
  abstract onContainerClick(event: MouseEvent): void;
}
