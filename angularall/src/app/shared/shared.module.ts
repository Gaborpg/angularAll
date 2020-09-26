import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { EnumkeyvaluePipe } from './pipes/enumkeyvalue.pipe';
import { ButtonComponent } from './components/button/button.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    FormFieldComponent,
    InputComponent,
    CheckboxComponent,
    EnumkeyvaluePipe,
    ButtonComponent,
    PanelComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    FormFieldComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    PanelComponent,
  ],
})
export class SharedModule {}
