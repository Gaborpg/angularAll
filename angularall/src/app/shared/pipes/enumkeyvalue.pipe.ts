import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumkeyvalue',
})
export class EnumkeyvaluePipe implements PipeTransform {
  transform(key: string, obj?: object): string {
    let error: string;
    if (obj[key]) {
      error = obj[key];
    } else {
      error = 'Something went wrong!';
    }

    return error;
  }
}
