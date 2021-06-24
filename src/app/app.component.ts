import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import data from '../assets/json/data1.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biju-graph';
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { yAxes: [{ticks: {beginAtZero: true}}] }
  };
  public barChartLabels: Label[] = data.axisLabels;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: data.data, label: data.seriesLabel }
  ];


}
