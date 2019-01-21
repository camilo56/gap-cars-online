import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interface/car';

@Pipe({
  name: 'markPipe'
})
export class MarkPipe implements PipeTransform {

  transform(value: Car[], args?: any): any {
    if(args){
      return value.filter((car: Car) => {let mark = car.mark.toLowerCase(); return mark.includes(args.toLowerCase())});
    }

    return value;
  }

}
