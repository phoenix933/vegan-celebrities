import { Component, OnInit, Input } from '@angular/core';

import { Celebrity } from '../../models';

@Component({
  selector: 'app-celebrity-item',
  templateUrl: './celebrity-item.component.html',
  styleUrls: ['./celebrity-item.component.scss'],
})
export class CelebrityItemComponent implements OnInit {
    @Input()
    celebrity: Celebrity;

    constructor() { }

    ngOnInit() {}
}
