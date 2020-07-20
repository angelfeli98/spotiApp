
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./style.css']
})
export class FooterComponent implements OnInit{

    private author: string;
    private date: Date;

    constructor(){
        this.author = 'Felipe Regalado';
        this.date = new Date();
    }

    ngOnInit(){}

    public get getAuthor():string {
        return this.author;
    }

    public get getDate():Date{
        return this.date;
    }
}