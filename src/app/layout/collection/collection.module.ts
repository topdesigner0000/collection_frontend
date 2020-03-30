import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CollectionRoutingModule1 } from './collection-routing.module';

import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatMenuModule, MatTabsModule, MatListModule,
  MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule
 } from '@angular/material';

 import { StatModule } from '../../shared/modules/stat/stat.module';
 import { Stat2Module} from '../../shared/modules/stat/stat2/stat2.module';
@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    StatModule,
    CollectionRoutingModule1,
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
    MatMenuModule,
    MatTabsModule,
    MatListModule,
    Stat2Module,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class CollectionModule { }
