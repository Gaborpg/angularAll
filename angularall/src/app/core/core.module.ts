import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutMiddleComponent } from './layouts/layout-middle/layout-middle.component';
import { PanelMiddleComponent } from './layouts/layout-middle/panel-middle.component';

@NgModule({
  declarations: [LayoutMiddleComponent, PanelMiddleComponent],
  imports: [SharedModule],
  exports: [LayoutMiddleComponent, PanelMiddleComponent],
})
export class CoreModule {}
