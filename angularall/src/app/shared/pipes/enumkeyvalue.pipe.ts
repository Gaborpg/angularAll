import { Pipe, PipeTransform } from '@angular/core';
import { ErrorHandlerClass } from '../utils/error';

@Pipe({
  name: 'errorHandle',
})
export class ErrorHandlePipe implements PipeTransform {
  transform(key: { [key: string]: any }): string {
    let error: string;
    Object.keys(key).forEach((k) => {
      error = ErrorHandlerClass.errorHandeling(k, key);
    });

    return error;
  }
}
