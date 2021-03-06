import { InjectionToken } from '@angular/core';

export const MAT_INPUT_INVALID_TYPES = [
  'button',
  'checkbox',
  'file',
  'hidden',
  'image',
  'radio',
  'range',
  'reset',
  'submit',
];

export const INPUT_VALUE_ACCESSOR = new InjectionToken<{ value: any }>(
  'INPUT_VALUE_ACCESSOR'
);

export let nextUniqueIdInput = 0;
export function nextUniqueIdValueInput() {
  return nextUniqueIdInput++;
}

export let nextUniqueNameInput = 0;
export function nextUniqueNameValueInput() {
  return nextUniqueNameInput++;
}

export let nextUniqueNameButton = 0;
export function nextUniqueNameValueButton() {
  return nextUniqueNameButton++;
}
export let nextUniquIdButton = 0;
export function nextUniqueIdValueButton() {
  return nextUniquIdButton++;
}

export let nextUniquIdCheckbox = 0;
export function nextUniquValueIdCheckbox() {
  return nextUniquIdCheckbox++;
}
export let nextUniquNameCheckbox = 0;
export function nextUniquValueNameCheckbox() {
  return nextUniquNameCheckbox++;
}
