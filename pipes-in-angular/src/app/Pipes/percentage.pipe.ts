import { pipe } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'percent'
})


export class PercentagePipe implements PipeTransform {
    transform(value: number,total:number, decimal:number) {
        return (value * 100 / total).toFixed(decimal) + ' %';
    }

}