import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ErrorHandlePipe } from './pipes/enumkeyvalue.pipe';
import { ButtonComponent } from './components/button/button.component';
import { PanelComponent } from './components/panel/panel.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { LayoutModule } from '@angular/cdk/layout';

import { LayoutMiddleComponent } from './layouts/layout-middle/layout-middle.component';
import { PanelMiddleComponent } from './layouts/layout-middle/panel-middle.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MustMatchDirective } from './directives/must-match.directive';
import { HttpClientModule } from '@angular/common/http';
import { TooltipDirective } from './directives/tooltip.directive';
import { PortalComponent } from './components/portal/portal.component';
import { RefreshOnChangeDirectiveDirective } from './directives/refresh-on-change-directive.directive';

@NgModule({
  declarations: [
    FormFieldComponent,
    InputComponent,
    CheckboxComponent,
    ErrorHandlePipe,
    ButtonComponent,
    PanelComponent,
    LayoutMiddleComponent,
    PanelMiddleComponent,
    MustMatchDirective,
    TooltipDirective,
    PortalComponent,
    RefreshOnChangeDirectiveDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PortalModule,
    OverlayModule,
    LayoutModule,
    NgScrollbarModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    FormFieldComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    PanelComponent,

    PortalModule,
    OverlayModule,
    LayoutModule,
    LayoutMiddleComponent,
    PanelMiddleComponent,
    NgScrollbarModule,
    MustMatchDirective,
    HttpClientModule,
    TooltipDirective,
    PortalComponent,
  ],
  providers: [],
})
export class SharedModule {}
