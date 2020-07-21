
import { Component, OnInit } from'@angular/core';
import { RouterLinkActive, RouterLink, Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./style.css']
})
export class ArtistComponent implements OnInit{

    private id: string;
    private artist: Object;
    private loading = true;
    private tracks: Object;
    private actualTrack: string;

    constructor(
        private routerLinkActive: ActivatedRoute,
        private spotifyService: SpotifyService
    ){
        this.actualTrack = '';
        this.routerLinkActive.params.subscribe( params => {
            this.id = params.id
            this.spotifyService.getQuery(`artists/${this.id}`)
                                .subscribe(artist => this.artist = artist);
            this.spotifyService.getQuery(`artists/${this.id}/top-tracks?country=MX`)
                                .subscribe(tracks => {
                                    this.tracks = tracks.tracks
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

    public get getTracks():Object{
        return this.tracks;
    }

    public set setActualTrack(src: string){
        this.actualTrack = src;
    }

    public get getActualTrack(): string{
        return this.actualTrack;
    }
}