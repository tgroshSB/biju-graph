import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ChartOptions, ChartDataSets } from 'chart.js';
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

  public currentDataSource: string = "";

  constructor(private chartDataService: ChartDataService) { 
  }
  
  ngOnInit(): void {
    
  }

  onDataSelectChange(event: MatSelectChange) {
    if (event.value) {
      this.chartDataService.getData(event.value).subscribe(
        data => {
          this.barChartData = [{data: data.data, label: data.seriesLabel}];
          this.barChartLabels = data.axisLabels;
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
          this.barChartData = [{data: [], label: ''}];
          this.barChartLabels = [];
        }
      );
    }
  }


}
