
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

    private data: Object;
    private loading = true;

    constructor(
        private spotifyService: SpotifyService,
        private router: Router
    ){
        this.spotifyService.getQuery('browse/new-releases?country=MX', 'albums')
            .subscribe(data => {
                this.data = data;
                this.loading = false;
            });
    }

    ngOnInit(){

    }

    public get getData():Object{
        return this.data;
    }

    public get getLoading(): boolean{
        return this.loading;
    }
}