import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-membership',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  value="clear me";
  memberForm : FormGroup;
  //date = new FormControl(new Date());
  constructor(private formBuilder : FormBuilder,
    private httpClient: HttpClient,private _snackBar: MatSnackBar) {
    this.memberForm = this.formBuilder.group({
      // joiningDateHdr: [new FormControl(new Date()).value],
      //id:['0'],
      joiningDate:['' , Validators.required],
      memberNumber: ['' , Validators.required],
      designation: ['' , Validators.required],
      subscribeType: ['Yearly'],
      memberName: ['' , Validators.required],
      fatherName: ['' , Validators.required],
      permanentAddress: ['' , Validators.required],
      permanentCity: ['' , Validators.required],
      mobileNumber: ['' , Validators.required],
      whatsappNumber: ['' , Validators.required],
      aadharNumber: ['' ],
      currentAddress: [''],
      currentCity: ['' ],
       });
  }
  
  showMessage() {
    this._snackBar.openFromComponent(MessageDialogComponent, {
      duration: 3000,
    });
  }
  ngOnInit(): void {
    // this.membershipForm.controls.joiningDateHdr.disable();
    // this.membershipForm.controls.memberNumberHdr.disable();
    // this.membershipForm.controls.designationHdr.disable();
    // this.membershipForm.controls.subscribeTypeHdr.disable();
  }
  submitOld(){
    this.httpClient.get<any>('http://localhost:9013/iwas/api/member/check'
    ).subscribe(data => {
      console.log(data);
      console.log("done");
      console.log(data[0].memberNumberHdr);
    });
  }

  submit() {
    console.log(this.memberForm.value);
    return this.httpClient.post<any>("http://localhost:9015/iwas/api/set/member",
      this.memberForm.value
    ). subscribe ( response => {
      if(response){
        console.log(response);
        this.memberForm.reset();
        this.showMessage();
        //this.dialog.open(DialogElementsExampleDialog);
      }else{
        this.showMessage();
      }
    });
  }
  clearClick(){
    this.memberForm.reset();
    this.showMessage();
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