import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stat2Component } from './stat2.component';
import { MatCardModule } from '@angular/material';
import { MatGridListModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule],
    declarations: [Stat2Component],
    exports: [Stat2Component]
})
export class Stat2Module {}
