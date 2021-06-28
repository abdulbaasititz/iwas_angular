import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.scss']
})
export class CreateSubscriptionComponent implements OnInit {
  value = "clear me";
  subscriptionForm: FormGroup;
  date = new FormControl(new Date());

  //date = new FormControl(new Date());
  constructor(private formBuilder : FormBuilder
              ,private httpClient: HttpClient,private toastr: ToastrService) {
    this.subscriptionForm = this.formBuilder.group({
      id:['0'],
      memberNumber: [''],
      aadharNumber: ['' ],
      receivedDate:[''],
      payment:['500',Validators.required],
      designation: ['' , Validators.required],
      subscribeType: ['Yearly'],
      memberName: ['' , Validators.required],
      fatherName: ['' , Validators.required],
      permanentAddress: ['' , Validators.required],
      permanentCity: ['' , Validators.required],
      mobileNumber: ['' , Validators.required],
      whatsappNumber: ['' , Validators.required],
      aadharNo:[''],
      currentAddress: ['' ],
      currentCity: [''],
       });
  }

  ngOnInit(): void {
    //this.subscriptionForm.controls.receivedDate.disable();
    // this.subscriptionForm.controls.payment.disable();

  }

  submit() {
    console.log(this.subscriptionForm.value);
    var amount=this.subscriptionForm.value.payment;
    var memberNumber = this.subscriptionForm.value.memberNumber;
    var receivedDate = this.subscriptionForm.value.receivedDate;
    //receivedDate="20/21/2021";
    return this.httpClient.post<any>("http://localhost:9015/api/set/subscribe/year?amount="+amount+"+&currentDate="+receivedDate+"&memberId="+memberNumber,
     null
    ). subscribe ( response => {
      if(response['status']=== "1"){
        this.toastr.success("Data Saved Successfully");
      }else{
        this.toastr.error("Member Number Already Exist Check the member sheet");
      }
    });

  }
  clearClick(){
    //this.subscriptionForm.reset();
    setTimeout(() => this.subscriptionForm.reset(), 200);
  }
 
  getValueByMemberNumber(){
    console.log("working"+this.subscriptionForm.value.memberNumber);
    var memberNumber = this.subscriptionForm.value.memberNumber;
    
    this.httpClient.get<any>('http://localhost:9015/api/get/member-number?memberNumber='+memberNumber
    ).subscribe(data => {
      console.log(data);
      this.subscriptionForm.controls.memberName.setValue(data.memberName);
      this.subscriptionForm.controls.fatherName.setValue(data.fatherName);
      this.subscriptionForm.controls.permanentAddress.setValue(data.permanentAddress);
      this.subscriptionForm.controls.permanentCity.setValue(data.permanentCity);
      this.subscriptionForm.controls.mobileNumber.setValue(data.mobileNumber);
      this.subscriptionForm.controls.whatsappNumber.setValue(data.whatsappNumber);
      this.subscriptionForm.controls.aadharNo.setValue(data.aadharNo);
      this.subscriptionForm.controls.currentAddress.setValue(data.currentAddress);
      this.subscriptionForm.controls.currentCity.setValue(data.currentCity);
      //console.log("done");
      //console.log(data[0].memberNumberHdr);
      //this.dataSource = new MatTableDataSource<PeriodicElement>(data);
      // this.subscriptionForm = data;
      
    });

  }
  getValueByAadharNumber(){
    console.log("working"+this.subscriptionForm.value.aadharNumber);
    var aadharNumber = this.subscriptionForm.value.aadharNumber;
    this.httpClient.get<any>('http://localhost:9015/api/get/aadhar-number?aadharNumber='+aadharNumber
    ).subscribe(data => {
      console.log(data);
      this.subscriptionForm.controls.memberName.setValue(data.memberName);
      this.subscriptionForm.controls.fatherName.setValue(data.fatherName);
      this.subscriptionForm.controls.permanentAddress.setValue(data.permanentAddress);
      this.subscriptionForm.controls.permanentCity.setValue(data.permanentCity);
      this.subscriptionForm.controls.mobileNumber.setValue(data.mobileNumber);
      this.subscriptionForm.controls.whatsappNumber.setValue(data.whatsappNumber);
      this.subscriptionForm.controls.aadharNo.setValue(data.aadharNo);
      this.subscriptionForm.controls.currentAddress.setValue(data.currentAddress);
      this.subscriptionForm.controls.currentCity.setValue(data.currentCity);
      
    });

  }
}

