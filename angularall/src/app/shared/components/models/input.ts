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

export let nextUniqueId = 0;
export function nextUniqueIdValue() {
  return nextUniqueId++;
}

export let nextUniqueName = 0;
export function nextUniqueNameValue() {
  return nextUniqueName++;
}
