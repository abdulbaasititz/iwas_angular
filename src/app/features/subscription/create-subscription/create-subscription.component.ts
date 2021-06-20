import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatSnackBar} from '@angular/material/snack-bar';
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
              ,private httpClient: HttpClient,private _snackBar: MatSnackBar) {
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
    console.log(this.subscriptionForm.value);
    var amount=this.subscriptionForm.value.payment;
    var memberNumber = this.subscriptionForm.value.memberNumber;
    var receivedDate = this.subscriptionForm.value.receivedDate;
    return this.httpClient.post<any>("http://localhost:9013/iwas/api/subscription/post?amount="+amount+"+&date="+receivedDate+"&memberId="+memberNumber,
      null
    ). subscribe ( response => {
      if(response){
        console.log(response);
        //this.subscriptionForm.reset();
        this.showMessage();
        
        //this.dialog.open(DialogElementsExampleDialog);
      }else{
        this.showMessage();
      }
    });

  }
  clearClick(){
    //this.subscriptionForm.reset();
    setTimeout(() => this.subscriptionForm.reset(), 200);
  }
  showMessage() {
    this._snackBar.openFromComponent(MessageDialogComponent, {
      duration: 3000,
    });
  }
  getValueByMemberNumber(){
    console.log("working"+this.subscriptionForm.value.memberNumber);
    var memberNumber = this.subscriptionForm.value.memberNumber;
    
    this.httpClient.get<any>('http://localhost:9013/iwas/api/member/get/member-number?memberNumber='+memberNumber
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
    this.httpClient.get<any>('http://localhost:9013/iwas/api/member/get/aadhar-number?aadharNumber='+aadharNumber
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

@Component({
  selector: 'message-dialog',
  templateUrl: 'message-dialog.html',
  styles: [`
    .member-enroll {
      color: green;
    }
  `],
})
export class MessageDialogComponent {}