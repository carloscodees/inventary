import { Component, OnInit } from '@angular/core';
import { TrashService } from '../../../core/services/trash.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total = 0;
  constructor(
    private trashService: TrashService
  ) {
    this.trashService.inTrash$.subscribe(id => {
      console.log(id);
      this.total = id.length;
    })
   }

  ngOnInit(): void {
  }

}
