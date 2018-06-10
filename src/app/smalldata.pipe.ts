import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smalldata'
})
export class SmalldataPipe implements PipeTransform {

  transform(value){

  if(value.length>60){
return value.substr(0,30)+'...';
}

}
}