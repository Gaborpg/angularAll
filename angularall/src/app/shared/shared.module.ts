import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { EnumkeyvaluePipe } from './pipes/enumkeyvalue.pipe';
import { ButtonComponent } from './components/button/button.component';
import { PanelComponent } from './components/panel/panel.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { LayoutModule } from '@angular/cdk/layout';

import { LayoutMiddleComponent } from './layouts/layout-middle/layout-middle.component';
import { PanelMiddleComponent } from './layouts/layout-middle/panel-middle.component';

@NgModule({
  declarations: [
    FormFieldComponent,
    InputComponent,
    CheckboxComponent,
    EnumkeyvaluePipe,
    ButtonComponent,
    PanelComponent,
    LayoutMiddleComponent,
    PanelMiddleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortalModule,
    OverlayModule,
    LayoutModule,
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
  ],
})
export class SharedModule {}
