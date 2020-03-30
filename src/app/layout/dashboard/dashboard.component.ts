import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort  } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import {FormControl} from '@angular/forms';
import * as CanvasJS from '../../../canvasjs.min';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    date = new FormControl(new Date());

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public translate: TranslateService) {

    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }



    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        const bar_chart = new CanvasJS.Chart('barchartContainer', {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: 'Basic Column Chart in Angular'
            },
            data: [{
                type: 'column',
                dataPoints: [
                    { y: 71, label: 'Apple' },
                    { y: 55, label: 'Mango' },
                    { y: 50, label: 'Orange' },
                    { y: 65, label: 'Banana' },
                    { y: 95, label: 'Pineapple' },
                    { y: 68, label: 'Pears' },
                    { y: 28, label: 'Grapes' },
                    { y: 34, label: 'Lychee' },
                    { y: 14, label: 'Jackfruit' }
                ]
            }]
        });

        bar_chart.render();

        const pie_chart = new CanvasJS.Chart('piechartContainer', {
            theme: 'light2',
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: 'Monthly Expense'
            },
            data: [{
                type: 'pie',
                showInLegend: true,
                toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
                indexLabel: '{name} - #percent%',
                dataPoints: [
                    { y: 450, name: 'Food' },
                    { y: 120, name: 'Insurance' },
                    { y: 300, name: 'Traveling' },
                    { y: 800, name: 'Housing' },
                    { y: 150, name: 'Education' },
                    { y: 150, name: 'Shopping'},
                    { y: 250, name: 'Others' }
                ]
            }]
        });

        pie_chart.render();
    }
}
