import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-celebrity-item-skeleton',
    templateUrl: './celebrity-item-skeleton.component.html',
    styleUrls: ['./celebrity-item-skeleton.component.scss', './../celebrity-item/celebrity-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CelebrityItemSkeletonComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
}
