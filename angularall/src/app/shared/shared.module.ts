import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormFieldComponent],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
