
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

    private data: Object;

    constructor(
        private spotifyService: SpotifyService
    ){
        this.spotifyService.getQuery('browse/new-releases?country=MX', 'albums')
            .subscribe(data => this.data = data);
    }

    ngOnInit(){

    }

    public get getData():Object{
        return this.data;
    }

}