import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort  } from '@angular/material';


export interface PeriodicElement {
  position: number;
  client_name: string;
  collector_name: string;
  debtor_name: string;
  amount: string;
  remain_amount: string;
  collected_amount: string;
  description: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, client_name: 'Hydrogen', collector_name: 'Jian', debtor_name: 'Test', amount: '300', remain_amount: '100', collected_amount: '200', description: 'It is okay'},
  { position: 1, client_name: 'Hydrogen', collector_name: 'Jian', debtor_name: 'Test', amount: '300', remain_amount: '100', collected_amount: '200', description: 'It is okay'},
  { position: 1, client_name: 'Hydrogen', collector_name: 'Jian', debtor_name: 'Test', amount: '300', remain_amount: '100', collected_amount: '200', description: 'It is okay'},
  { position: 1, client_name: 'Hydrogen', collector_name: 'Jian', debtor_name: 'Test', amount: '300', remain_amount: '100', collected_amount: '200', description: 'It is okay'},
  { position: 1, client_name: 'Hydrogen', collector_name: 'Jian', debtor_name: 'Test', amount: '300', remain_amount: '100', collected_amount: '200', description: 'It is okay'},
  { position: 1, client_name: 'Hydrogen', collector_name: 'Jian', debtor_name: 'Test', amount: '300', remain_amount: '100', collected_amount: '200', description: 'It is okay'},
  { position: 1, client_name: 'Hydrogen', collector_name: 'Jian', debtor_name: 'Test', amount: '300', remain_amount: '100', collected_amount: '200', description: 'It is okay'},
];

export interface Action {
  position: number;
  level1: string;
  level2: string;
  level3: string;
  note: string;
  created: string;
}
const ACTION_DATA: Action[] = [
  {position: 1, level1: 'email debtor', level2: 'send letter to debtor', level3: 'it is okay', note: 'finiancial statement', created: 'Mar 08 2020 19:48:30'},
  {position: 2, level1: 'email debtor', level2: 'send letter to debtor', level3: 'it is okay', note: 'finiancial statement', created: 'Mar 08 2020 19:48:30'},
  {position: 3, level1: 'email debtor', level2: 'send letter to debtor', level3: 'it is okay', note: 'finiancial statement', created: 'Mar 08 2020 19:48:30'},
  {position: 4, level1: 'email debtor', level2: 'send letter to debtor', level3: 'it is okay', note: 'finiancial statement', created: 'Mar 08 2020 19:48:30'},
  {position: 5, level1: 'email debtor', level2: 'send letter to debtor', level3: 'it is okay', note: 'finiancial statement', created: 'Mar 08 2020 19:48:30'},
  {position: 6, level1: 'email debtor', level2: 'send letter to debtor', level3: 'it is okay', note: 'finiancial statement', created: 'Mar 08 2020 19:48:30'},
  {position: 7, level1: 'email debtor', level2: 'send letter to debtor', level3: 'it is okay', note: 'finiancial statement', created: 'Mar 08 2020 19:48:30'},
  {position: 8, level1: 'email debtor', level2: 'send letter to debtor', level3: 'it is okay', note: 'finiancial statement', created: 'Mar 08 2020 19:48:30'}
];
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})

export class CollectionComponent implements OnInit {

  displayedColumns = ['position', 'client', 'collector', 'debtor', 'amount', 'remain_amount', 'collected_amount', 'description', 'action', 'save'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  actionColumns = ['position', 'level1', 'level2', 'level3', 'note', 'created'];
  action_datasource = new MatTableDataSource(ACTION_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  attachments: any = [
    {name: 'profile.png', url: '/uploads/profile.png'},
    {name: 'debt_info.doc', url: '/uploads/debt_info.doc'},
    {name: 'description.pdf', url: '/uploads/description.pdf'},
  ];

  attach_head = ['No.', 'File'];
  constructor() { }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
