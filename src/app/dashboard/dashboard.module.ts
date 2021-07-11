import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MainComponent } from './components/main/main.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgxEchartsModule } from 'ngx-echarts';
import { BarBasicComponent } from './components/bar-basic/bar-basic.component';
import { DonaComponent } from './components/dona/dona.component';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [ MainComponent, DataTableComponent, DialogComponent, BarBasicComponent, DonaComponent, DetailsComponent],
  exports: [
    MainComponent,
    DialogComponent,
    DataTableComponent,
    BarBasicComponent,
    DonaComponent
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    MatSelectModule,
    DragDropModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class DashboardModule { }
