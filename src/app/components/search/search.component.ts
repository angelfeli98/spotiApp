
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{

    private resultA: Object;
    private loading = false;

    constructor(
        private spotifyService: SpotifyService,
        private router: Router
    ){}

    ngOnInit(){}

    public searchArtist = (term: string):void => {
        if(term.length > 0){
            this.loading = true;
            this.spotifyService.getQuery(`search?q=${term}&type=artist&market=MX&limit=10&offset=5`, 'artists')
                            .subscribe(res => {
                                this.resultA = res;
                                this.loading = false;
                            })
        }
    }

    public get getResults():Object{
        return this.resultA;
    }

    public get getLoading():boolean{
        return this.loading;
    }
}