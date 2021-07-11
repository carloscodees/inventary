import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent implements OnInit {

  options: any;

  constructor() { }

  ngOnInit(): void {
    this.options = {
      tooltip: {
          trigger: 'item'
      },
      legend: {
          top: '5%',
          left: 'center'
      },
      series: [
          {
              name: 'Inventary',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '40',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  {value: 1, name: 'Product 1'},
                  {value: 2, name: 'Product 2'},
                  {value: 3, name: 'Product 3'},
                  {value: 4, name: 'Product 4'},
                  {value: 5, name: 'Product 5'}
              ]
          }
      ]
  };
  }

}
