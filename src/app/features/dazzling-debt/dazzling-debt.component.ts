import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dazzling-debt',
  templateUrl: './dazzling-debt.component.html',
  styleUrls: ['./dazzling-debt.component.scss']
})
export class DazzlingDebtComponent implements OnInit {
  value = "clear me";
  dazzlingDebtForm: FormGroup;
  //date = new FormControl(new Date());
  
  constructor(private formBuilder: FormBuilder
    , private httpClient: HttpClient) {
    this.dazzlingDebtForm = this.formBuilder.group({
      debtDate:[''],
      duration: [''],
      alazhiyaKadanNo: [''],
      debtAmount:[''],
      memberNumber: [''],
      aadharNumber: [''],
      memberName: [''],
      fatherName: ['' ],
      permanentAddress: ['' ],
      permanentCity: ['' ],
      mobileNumber: ['' ],
      whatsappNumber: ['' ],
      currentAddress: ['' ],
      currentCity: ['' ],
      witOneMemberNumber: ['' ],
      witOneAadharNumber: ['' ],
      witOneMemberName: ['' ],
      witOneFatherName: ['' ],
      witOnePermanentAddress: ['' ],
      witOnePermanentCity: [''],
      witTwoMemberNumber: [''],
      witTwoAadharNumber: [''],
      witTwoMemberName: [''],
      witTwoFatherName: [''],
      witTwoPermanentAddress: [''],
      witTwoPermanentCity: [''],
      approvalName:[''],
      verificationName:[''],
      jamathName:[''],
      purposeOfLoan:['']
    });
  }
  
  ngOnInit(): void {
  }
  
  submit() {
    console.log(this.dazzlingDebtForm.value);
  }

  clearClick() {
    this.dazzlingDebtForm.reset();
  }
  getValueByMemberNumber(){
    console.log("working"+this.dazzlingDebtForm.value.memberNumber);
    var memberNumber = this.dazzlingDebtForm.value.memberNumber;
    
    this.httpClient.get<any>('http://localhost:9013/iwas/api/member/get/member-number?memberNumber='+memberNumber
    ).subscribe(data => {
      console.log(data);
      this.dazzlingDebtForm.controls.memberName.setValue(data.memberName);
      this.dazzlingDebtForm.controls.fatherName.setValue(data.fatherName);
      this.dazzlingDebtForm.controls.permanentAddress.setValue(data.permanentAddress);
      this.dazzlingDebtForm.controls.permanentCity.setValue(data.permanentCity);
      this.dazzlingDebtForm.controls.mobileNumber.setValue(data.mobileNumber);
      this.dazzlingDebtForm.controls.whatsappNumber.setValue(data.whatsappNumber);
      this.dazzlingDebtForm.controls.aadharNo.setValue(data.aadharNo);
      this.dazzlingDebtForm.controls.currentAddress.setValue(data.currentAddress);
      this.dazzlingDebtForm.controls.currentCity.setValue(data.currentCity);
    });

  }
  getValueByAadharNumber(){
    console.log("working"+this.dazzlingDebtForm.value.aadharNumber);
    var aadharNumber = this.dazzlingDebtForm.value.aadharNumber;
    this.httpClient.get<any>('http://localhost:9013/iwas/api/member/get/aadhar-number?aadharNumber='+aadharNumber
    ).subscribe(data => {
      console.log(data);
      this.dazzlingDebtForm.controls.memberName.setValue(data.memberName);
      this.dazzlingDebtForm.controls.fatherName.setValue(data.fatherName);
      this.dazzlingDebtForm.controls.permanentAddress.setValue(data.permanentAddress);
      this.dazzlingDebtForm.controls.permanentCity.setValue(data.permanentCity);
      this.dazzlingDebtForm.controls.mobileNumber.setValue(data.mobileNumber);
      this.dazzlingDebtForm.controls.whatsappNumber.setValue(data.whatsappNumber);
      this.dazzlingDebtForm.controls.aadharNo.setValue(data.aadharNo);
      this.dazzlingDebtForm.controls.currentAddress.setValue(data.currentAddress);
      this.dazzlingDebtForm.controls.currentCity.setValue(data.currentCity);
    });

  }
  getWitOneValueByMemberNumber(){
    console.log("working"+this.dazzlingDebtForm.value.memberNumber);
    var memberNumber = this.dazzlingDebtForm.value.memberNumber;
    
    this.httpClient.get<any>('http://localhost:9013/iwas/api/member/get/member-number?memberNumber='+memberNumber
    ).subscribe(data => {
      console.log(data);
      this.dazzlingDebtForm.controls.witOneMemberName.setValue(data.memberName);
      this.dazzlingDebtForm.controls.witOnefatherName.setValue(data.fatherName);
      this.dazzlingDebtForm.controls.witOnepermanentAddress.setValue(data.permanentAddress);
      this.dazzlingDebtForm.controls.witOnepermanentCity.setValue(data.permanentCity);      
    });

  }
  getWitOneValueByAadharNumber(){
    console.log("working"+this.dazzlingDebtForm.value.aadharNumber);
    var aadharNumber = this.dazzlingDebtForm.value.aadharNumber;
    this.httpClient.get<any>('http://localhost:9013/iwas/api/member/get/aadhar-number?aadharNumber='+aadharNumber
    ).subscribe(data => {
      console.log(data);
      this.dazzlingDebtForm.controls.witOneMemberName.setValue(data.memberName);
      this.dazzlingDebtForm.controls.witOnefatherName.setValue(data.fatherName);
      this.dazzlingDebtForm.controls.witOnepermanentAddress.setValue(data.permanentAddress);
      this.dazzlingDebtForm.controls.witOnepermanentCity.setValue(data.permanentCity);      
    });

  }
  getWitTwoValueByMemberNumber(){
    console.log("working"+this.dazzlingDebtForm.value.memberNumber);
    var memberNumber = this.dazzlingDebtForm.value.memberNumber;
    this.httpClient.get<any>('http://localhost:9013/iwas/api/member/get/member-number?memberNumber='+memberNumber
    ).subscribe(data => {
      this.dazzlingDebtForm.controls.witTwoMemberName.setValue(data.memberName);
      this.dazzlingDebtForm.controls.witTwofatherName.setValue(data.fatherName);
      this.dazzlingDebtForm.controls.witTwopermanentAddress.setValue(data.permanentAddress);
      this.dazzlingDebtForm.controls.witTwopermanentCity.setValue(data.permanentCity);  
    });

  }
  getWitTwoValueByAadharNumber(){
    console.log("working"+this.dazzlingDebtForm.value.aadharNumber);
    var aadharNumber = this.dazzlingDebtForm.value.aadharNumber;
    this.httpClient.get<any>('http://localhost:9013/iwas/api/member/get/aadhar-number?aadharNumber='+aadharNumber
    ).subscribe(data => {
      this.dazzlingDebtForm.controls.witTwoMemberName.setValue(data.memberName);
      this.dazzlingDebtForm.controls.witTwofatherName.setValue(data.fatherName);
      this.dazzlingDebtForm.controls.witTwopermanentAddress.setValue(data.permanentAddress);
      this.dazzlingDebtForm.controls.witTwopermanentCity.setValue(data.permanentCity);
    });

  }
}
