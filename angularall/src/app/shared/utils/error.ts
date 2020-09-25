export function getFormFieldMissingControlError(): Error {
  return Error('myapp-form-field must contain a MyFormFieldControl.');
}

export function getInputUnsupportedTypeError(type: string): Error {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
