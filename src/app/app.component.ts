import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ChartDataService } from './chart-data.service';
import { DataTableItem } from './data-table/data-table-datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentDataSource: string = "";
  public dataTable: DataTableItem[] = [];

  public chartData: any[];
  public chartSeriesLabel: string;
  public chartAxisLabels: string[];

  constructor(private chartDataService: ChartDataService) {
  }

  ngOnInit(): void {

  }

  onDataSelectChange(event: MatSelectChange) {
    if (event.value) {
      this.chartDataService.getData(event.value).subscribe(
        response => {
          this.chartData = response.data;
          this.chartSeriesLabel = response.seriesLabel;
          this.chartAxisLabels = response.axisLabels;
          this.dataTable = this.createDataTable(response.data, response.axisLabels);
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
          this.chartData = []
          this.chartSeriesLabel = '';
          this.chartAxisLabels = [];
          this.dataTable = [];
        }
      );
    }
  }

  createDataTable(values: [], labels: []): DataTableItem[] {
    let items: DataTableItem[] = [];

    for (let x = 0; x < labels.length; x++) {
      items.push({ label: labels[x], value: values[x] });
    }

    return items;
  }


}
