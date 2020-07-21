
import { Pipe, PipeTransform }from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'url'
})
export class UrlPipe implements PipeTransform{

    constructor(private domSanitizer: DomSanitizer){
    }

    transform(id: string):SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/embed/track/${id}`);
    }
}