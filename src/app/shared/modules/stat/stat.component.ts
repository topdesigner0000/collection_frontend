import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: string;
    @Input() label: string;
    @Input() data: number;
    @Input() name: string;
    @Input() email: string;
    @Input() phone: string;
    @Input() amount: string;
    @Input() isDoc: string;
    @Input() isLegal: string;

    constructor() {}

    ngOnInit() {}
}
