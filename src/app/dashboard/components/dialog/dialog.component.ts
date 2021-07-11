import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }
  seasons: any = [];
  submit = true;
  name = "";
  description = "";
  price = "";
  category = "";
  ngOnInit(): void {
    this.productService.getAllCategories().subscribe((categories: any) => {
   
      this.seasons = categories;
    })
  }
  doSomething(id: any){
  
    this.category = id
   }
  closeDialog(): void{

    this.dialogRef.close({
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category
    });

  }

}
