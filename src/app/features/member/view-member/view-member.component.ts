import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements AfterViewInit {
  displayedColumns: string[] = ['joiningDate', 'memberNumber', 'designation'
    , 'memberName', 'fatherName', 'permanentAddress'
    , 'permanentCity', 'mobileNumber', 'whatsappNumber'
    , 'aadharNumber', 'currentAddress', 'currentCity'];
  baseUrl = environment.baseUrl;
  dataSource = new MatTableDataSource<PeriodicElement>();
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private formBuilder : FormBuilder
    ,private httpClient: HttpClient) {

  }

  // @ts-ignore
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngAfterViewInit() {

    this.httpClient.get<any>(this.baseUrl+'/get/member'
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
  joiningDate: string;
  memberNumber: string;
  designation: string;
  memberName: string;
  fatherName: string;
  permanentAddress: string;
  permanentCity: string;
  mobileNumber: string;
  whatsappNumber: string;
  aadharNumber: string;
  currentAddress: string;
  currentCity: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    joiningDate: '01-06-2015',
    memberNumber: '1',
    designation: 'Admin',
    memberName: 'Hilur Mohamed (raja)',
    fatherName:'Abdul Gaffoor',
    permanentAddress: 'Kaithey Millath Nagar',
    permanentCity: 'Swamimalai',
    mobileNumber: '96598095528',
    whatsappNumber: '96598095528',
    aadharNumber: '',
    currentAddress: '',
    currentCity: 'KUWAIT',
  }
];
