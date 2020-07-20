
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class SpotifyService{

    private token: string;
    private headers: HttpHeaders;
    private url: string;

    constructor(
        private httpClient: HttpClient
    ){
        this.token = 'BQCY_ervtw3VlCaDJBUvS9xu6TWYVywEjMn7LX2LXxuNYZLH7wuRFqy9ENt0GHb2Xo4NPrQsMytWv2razkQ';
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        this.url = 'https://api.spotify.com/v1/';
    }

    public getQuery = (query: string, field: string):any => {
        return this.httpClient.get(`${this.url}${query}`, {
            'headers': this.headers
        }).pipe(map(data => data[field]['items']))
    }
}
