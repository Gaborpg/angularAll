import { environment } from 'src/environments/environment';

export function getFormFieldMissingControlError(): Error {
  return Error('myapp-form-field must contain a MyFormFieldControl.');
}

export function getInputUnsupportedTypeError(type: string): Error {
  return Error(`Input type "${type}" isn't supported by myappInput.`);
}

export function errorNotImplement(type: string): Error {
  return Error(`Please implement ${type} error`);
}

export class ErrorHandlerClass {
  static errorHandeling(key: string, obj?: { [key: string]: any }) {
    switch (key) {
      case 'required': {
        return 'You must enter a value';
      }
      case 'email': {
        return 'Not a valid email';
      }
      case 'minlength': {
        return `Minimum length ${obj.minlength.requiredLength} character!`;
      }
      case 'mustMatch': {
        return `Controls must Match`;
      }
      default: {
        if (!environment.production) {
          throw errorNotImplement(key);
        }
        return 'Something went wrong!';
      }
    }
  }
}
