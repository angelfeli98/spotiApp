
import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'
})
export class CardComponent implements OnInit{

    @Input() private type: string;
    @Input() private data: Object;

    constructor(
        private router: Router
    ){
    }

    ngOnInit(){}

    public navigateToItem = ():void => {
        const id = (this.data['type'] == 'album')? this.data['artists'][0].id: this.data['id'];
        this.router.navigate(['/artist', id]);
    }

    public get getData(): any{
        return this.data;
    }

    public get getTitle():string {
        return this.type;
    }
}