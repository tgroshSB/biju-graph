import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  public barChartOptions: ChartOptions = {
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
  };
  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [{ data: [], label: '' }];

  @Input() data: any[] = [];
  @Input() axisLabels: string[] = [];
  @Input() seriesLabel: string = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.barChartData = [{ data: this.data, label: this.seriesLabel }];
      this.barChartLabels = this.axisLabels;
    }
  }

  ngOnInit(): void {
  }

}
