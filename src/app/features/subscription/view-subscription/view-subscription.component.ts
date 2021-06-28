import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-view-subscription',
  templateUrl: './view-subscription.component.html',
  styleUrls: ['./view-subscription.component.scss']
})
export class ViewSubscriptionComponent implements AfterViewInit {
  displayedColumns: string[] = ['joiningDate', 'memberNumber', 'memberName'
  , 'amount', 'subscriptionYear', ];

  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private formBuilder : FormBuilder
    ,private httpClient: HttpClient) {  }
  // @ts-ignore
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngAfterViewInit() {

    this.httpClient.get<any>('http://localhost:9015/api/get/subscription'
    ).subscribe(data => {
      console.log(data);
      //console.log("done");
      //console.log(data[0].memberNumberHdr);
      this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
export interface PeriodicElement {
  memberNumber: string;
  joiningDate : string;
  memberName: string;
  amount : string;
  subscriptionYear : string;
}