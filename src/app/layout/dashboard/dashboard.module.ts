import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule,
         MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule
        } from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { StatModule } from '../../shared/modules/stat/stat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        StatModule,
        MatCardModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
