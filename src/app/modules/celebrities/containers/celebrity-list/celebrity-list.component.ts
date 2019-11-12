import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-celebrity-list',
    templateUrl: './celebrity-list.component.html',
    styleUrls: ['./celebrity-list.component.scss'],
})
export class CelebrityListComponent implements OnInit {
    celebrities$: Observable<any>;

    celebs = [
        {
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },
        {
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },{
            name: 'Julian',
            imageUrl: '',
            category: 'Some',
            occupation: 'Another',
        },
    ]

    constructor(
        private _firestore: AngularFirestore,
    ) { }

    ngOnInit(): void {
        this.celebrities$ = this._firestore
            .collection('celebrities')
            .valueChanges();
        // this.celebrities$ = of(this.celebs);
    }
}
