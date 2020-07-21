
import { Component, OnInit } from'@angular/core';
import { RouterLinkActive, RouterLink, Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit{

    private id: string;
    private artist: Object;
    private loading = true;

    constructor(
        private routerLinkActive: ActivatedRoute,
        private spotifyService: SpotifyService
    ){
        this.routerLinkActive.params.subscribe( params => {
            this.id = params.id
            this.spotifyService.getQuery(`artists/${this.id}`)
                                .subscribe(artist => {
                                    this.artist = artist
                                    this.loading = false;
                                });
        })
    }

    ngOnInit(){}

    public get getArtist():Object{
        return this.artist;
    }

    public get getLoading():boolean{
        return this.loading;
    }
}