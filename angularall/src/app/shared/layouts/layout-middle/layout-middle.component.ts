import { Component, ContentChild } from '@angular/core';
import { PanelMiddleComponent } from './panel-middle.component';

@Component({
  selector: 'myapp-layout-middle',
  templateUrl: './layout-middle.component.html',
  styleUrls: ['./layout-middle.component.scss'],
})
export class LayoutMiddleComponent {
  @ContentChild(PanelMiddleComponent) middle: PanelMiddleComponent;

  constructor() {}
}
