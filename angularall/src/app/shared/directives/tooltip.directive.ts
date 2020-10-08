import {
  bottomPostition,
  leftPostition,
  rightPostition,
  topPostition,
} from './../models/tooltip';
import {
  ConnectionPositionPair,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import {
  HostListener,
  TemplateRef,
  OnInit,
  ElementRef,
  ViewContainerRef,
} from '@angular/core';
import { Input } from '@angular/core';
import { Directive } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

/*I can improve this:
-ComponentPortal,
-Offset positioning,
-Just text tooltip


*/

@Directive({
  selector: '[myappTooltip]',
})
export class TooltipDirective implements OnInit {
  @Input() myappTooltip: TemplateRef<any>;
  private _overlayRef: OverlayRef;
  private _templatePortal: TemplatePortal<any>;

  constructor(
    private _overlay: Overlay,
    private _overlayPositionBuilder: OverlayPositionBuilder,
    private _elementRef: ElementRef,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const positionStrategy = this._overlayPositionBuilder
      .flexibleConnectedTo(this._elementRef)
      .withPositions(this.getPositions());

    this._overlayRef = this._overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    this._templatePortal = new TemplatePortal(
      this.myappTooltip,
      this._viewContainerRef
    );
    this._overlayRef.attach(this._templatePortal);
  }

  @HostListener('mouseout')
  hide() {
    this._overlayRef.detach();
  }

  private getPositions(): ConnectionPositionPair[] {
    return [rightPostition, leftPostition, bottomPostition, topPostition];
  }
}
