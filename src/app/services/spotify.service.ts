
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
        this.token = 'BQAexpi25wiaJVr5ljFLDd6CSSNKvtHByjduuubkVR28t7O88Is86i2WY7-ZnUgKXtghnTQ6aTuHej6SnWQ';
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        this.url = 'https://api.spotify.com/v1/';
    }

    private refreshToken = ():void => {

    }

    public getQuery = (query: string, field ?: string):any => {
        return this.httpClient.get(`${this.url}${query}`, {
            'headers': this.headers
        }).pipe(map(data => {
            if(field)
                return data[field]['items'];
            return data;
        }))
    }
}
