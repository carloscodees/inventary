import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-basic',
  templateUrl: './bar-basic.component.html',
  styleUrls: ['./bar-basic.component.scss']
})
export class BarBasicComponent implements OnInit {
  options: any;
  constructor() {}

  ngOnInit(): void {
    this.options = {
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
      }]
  };
   
  }

}
