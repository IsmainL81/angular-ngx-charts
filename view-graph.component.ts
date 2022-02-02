import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  styleUrls: ['./view-graph.component.css']
})
export class ViewGraphComponent implements OnInit {
  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Face_analysis'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['00.05', '00.10', '00.15', '00.20', '00.25', '00.30', '00.35', '00.40'],
      tickmarkPlacement: 'on',
      title: {
          text: 'Timestamp'
      }
  },
    series: [{
      name: 'Anger',
      data: [502, 635, 809, 947, 1402, 3634, 5268, 5763]
  }, {
      name: 'Fear',
      data: [163, 203, 276, 408, 547, 729, 628, 829]
  }, {
      name: 'Surprise',
      data: [18, 31, 54, 156, 339, 818, 1201, 1446]
  }, {
      name: 'Sadness',
      data: [203, 264, 119, 408, 375, 289, 445, 503]
  }, {
      name: 'Disgust',
      data: [55, 66, 24, 158, 278, 388, 444, 489]
  },  {
      name: 'Joy',
      data: [775, 990, 884, 804, 665, 777, 555, 945]
  },  {
      name: 'Contempt',
      data: [132, 145, 345, 456, 505, 378, 455, 708]
  }]
  }
  constructor() { }
  ngOnInit() {
    Highcharts.chart('container', this.options);
  }
}
