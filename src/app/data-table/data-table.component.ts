import { OnInit, Component, Input, ViewChild, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataTableItem } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  @Input() data: DataTableItem[] = [];
  @Input() filter: string = "";
  matDataSource: MatTableDataSource<DataTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['label', 'value'];

  constructor() {
    this.matDataSource = new MatTableDataSource<DataTableItem>(this.data);
  }
  ngAfterViewInit(): void {
    this.matDataSource.paginator = this.paginator;
    this.matDataSource.sort = this.sort;
    this.matDataSource.data = this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue !== changes.data.previousValue) {
      this.matDataSource.data = this.data;
    }
    if (changes.filter && changes.filter.currentValue !== changes.filter.previousValue) {
      this.matDataSource.paginator?.firstPage();
      this.matDataSource.filter = this.filter;
    }
  }

  ngOnInit(): void {

  }
}

