import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PosttableDataSource, PosttableItem } from './posttable-datasource';
import { JsonPlaceholderService, ENDPOINTS } from '../services/json-placeholder.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'bi-posttable',
  templateUrl: './posttable.component.html',
  styleUrls: ['./posttable.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PosttableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PosttableItem>;
  @Input() data: PosttableItem[];
  dataSource: PosttableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'userId', 'id'];
  expandedItem: PosttableItem | null;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource = new PosttableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
