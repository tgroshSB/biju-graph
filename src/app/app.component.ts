import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartDataService } from './chart-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    scales: { yAxes: [{ticks: {beginAtZero: true}}] }
  };
  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [{ data: [], label: '' }];

  constructor(private chartDataService: ChartDataService) { }
  
  ngOnInit(): void {
    this.chartDataService.getData().subscribe(
      data => {
        this.barChartData = [{data: data.data, label: data.seriesLabel}];
        this.barChartLabels = data.axisLabels;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }


}
