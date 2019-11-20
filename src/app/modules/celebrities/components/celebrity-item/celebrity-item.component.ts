import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Celebrity } from '../../models';

@Component({
    selector: 'app-celebrity-item',
    templateUrl: './celebrity-item.component.html',
    styleUrls: ['./celebrity-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CelebrityItemComponent implements OnInit {
    @Input()
    celebrity: Celebrity;

    constructor() { }

    ngOnInit() {}
}
