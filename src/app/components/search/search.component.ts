
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{

    private resultA: Object;

    constructor(
        private spotifyService: SpotifyService
    ){}

    ngOnInit(){}

    public searchArtist = (term: string):void => {
        if(term.length > 0)
        this.spotifyService.getQuery(`search?q=${term}&type=artist&market=MX&limit=10&offset=5`, 'artists')
                            .subscribe(res => this.resultA = res)
    }

    public get getResults():Object{
        console.log(this.resultA)
        return this.resultA;
    }
}