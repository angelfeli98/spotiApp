
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
        this.token = 'BQCF-2c9lnxdNpqGBJk9483_lnZ0SFAsbJkyrc4TRGRmRqql151nxv84rdf0UXJV4-EnSw21pd73TyEO4nc';
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        this.url = 'https://api.spotify.com/v1/';
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
