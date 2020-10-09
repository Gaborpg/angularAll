import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[refresh]',
})
export class RefreshOnChangeDirectiveDirective {
  private _value: any;

  @Input() set refresh(value: any) {
    if (this._value !== value) {
      this._viewContainer.clear();
      this._viewContainer.createEmbeddedView(this._templateRef);
      this._value = value;
    }
  }
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}
}
