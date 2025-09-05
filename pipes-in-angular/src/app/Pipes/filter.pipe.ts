import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";
import { Student } from "../Models/Students";

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform
{
    transform(list:Student[], filterBy:string)
    {
        console.log("Filter Pipe Called");
        if(filterBy.toLowerCase() === 'all' || filterBy === '' || list.length === 0)
        {
            return list;
        }
        else
        {
            return list.filter((std) => {
                return std.gender.toLowerCase() === filterBy.toLowerCase();
            });
        }
    }
}