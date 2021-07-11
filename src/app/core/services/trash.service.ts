import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrashService {

  private trash: any[] = [];
  private inTrash = new BehaviorSubject<any[]>([]);

  inTrash$ = this.inTrash.asObservable();

  constructor() { }

  addTrash(product: any){
    this.trash = [...this.trash, product];
    this.inTrash.next(this.trash);
  }
}
