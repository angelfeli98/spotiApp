
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterList'
})
export class FilterList implements PipeTransform{

    transform(list: any, type: string){
        if(type == 'genres')
            return list;

        return list.name;
    }
}