import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppConstants } from 'src/app/core/utils/AppConstants';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData: FormGroup;
  totalMember: string;
  totalAmount : string;
  currentYearJoined : string;
  currentYearAmount : string;
  routes = AppConstants.routes;
  constructor(private httpClient: HttpClient,private formBuilder : FormBuilder,private router: Router,
    private toastr: ToastrService) {
    this.dashboardData = this.formBuilder.group({
      id:['0'],
      totalMember: ['']
    });
  }
  ngOnInit() {
    this.httpClient.get<any>('http://localhost:9015/api/get/dashboard').subscribe(data => {
        console.log(data);
        this.dashboardData.controls.totalMember.setValue(data.totalMember);
        this.totalMember=data.totalMember;
        this.totalAmount = data.totalAmount;
        this.currentYearJoined = data.currentYearJoined;
        this.currentYearAmount = data.currentYearAmount;
    })        
  }

}
