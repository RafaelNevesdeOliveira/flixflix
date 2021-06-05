import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArray'
})
export class ObjToArrayPipe implements PipeTransform {

  transform(object: any = []): any {
    return Object.values(object);
  }

}
