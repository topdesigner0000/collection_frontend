import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stat2',
    templateUrl: './stat2.component.html',
    styleUrls: ['./stat2.component.scss']
})
export class Stat2Component implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: string;
    @Input() label: string;
    @Input() data: number;
    @Input() name: string;
    @Input() email: string;
    @Input() phone: string;
    @Input() address: string;

    constructor() {}

    ngOnInit() {}
}
