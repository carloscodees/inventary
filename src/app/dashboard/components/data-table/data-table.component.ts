import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { DetailsComponent } from '../details/details.component';
import { DialogComponent } from '../dialog/dialog.component';
import { TrashService } from '../../../core/services/trash.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'src','name', 'price', 'categories', 'date', 'edit'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  submit = true;
  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    private trashService: TrashService
  ){
   
  }
  ngOnInit(): void {
    this.rederTable();  
  }
  ngAfterViewInit() {
   
  }

  viewItem(element: any){
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: element});

    dialogRef.afterClosed().subscribe(response => {
     
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
   
    dialogRef.afterClosed().subscribe(result => {
      
      if(result != undefined ){
        this.submit = true;
        this.productsService.createProduct(result).subscribe((response) => {
         
          this.rederTable();
        })
      }
     
   
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      
    }
  }
  rederTable(){

    this.productsService.getProducts()
    .subscribe((products: any) => {
      
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.submit = false;

    })
     
  }
  drop(event: CdkDragDrop<any[]>) {
    const previousIndex = this.dataSource.data.findIndex((row: any) => row === event.item.data);
    moveItemInArray(this.dataSource.data,previousIndex, event.currentIndex);
    this.dataSource.data = this.dataSource.data.slice();
  }
  
  deleteProduct(id:any){
    this.submit = true;
    this.productsService.deleteProduct(id).subscribe((response) =>{
      this.trashService.addTrash(id);
      this.rederTable();

    
    })
  }


}

