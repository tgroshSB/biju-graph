import { OnInit, Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataTableItem } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  @Input() data: DataTableItem[] = [];
  matDataSource: MatTableDataSource<DataTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['label', 'value'];

  constructor() {
    this.matDataSource = new MatTableDataSource<DataTableItem>(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue !== changes.data.previousValue) {
      this.matDataSource.data = this.data;
    }
  }

  ngOnInit(): void {
    this.matDataSource.data = this.data;
  }
}
