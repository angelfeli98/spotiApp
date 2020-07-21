
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noImage'
})
export class NoImagePipe implements PipeTransform{
    transform(srcImg: Object[]):string {
        if(srcImg.length != 0)
            return srcImg[0]['url'];

        return 'assets/img/noimage.png';
    }
}