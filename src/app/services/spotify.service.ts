
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

    public refreshToken = ():void => {
        const body = JSON.stringify({
            grant_type: 'client_credentials',
            client_id:  '92f99dd74fad49659ec951f6d37ff241',
            client_secret: '8dfd8a60eba44f4c9d795dda534c83ef'
        });
        const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
        this.httpClient.post('https://accounts.spotify.com/api/token',body,{ headers })
                        .pipe( map(data => data['access_token']))
                        .subscribe(token => this.token = token, (err) => console.log(err))
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
