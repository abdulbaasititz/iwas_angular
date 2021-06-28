import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-membership',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  value="clear me";
  memberForm : FormGroup;
  private data:any = []
  //date = new FormControl(new Date());
  constructor(private formBuilder : FormBuilder,
    private httpClient: HttpClient,private toastr: ToastrService) {
      
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
      whatsappNumber: [''],
      aadharNumber: [''],
      currentAddress: [''],
      currentCity: ['' ],
       });
  }

  ngOnInit(): void {
    // this.membershipForm.controls.joiningDateHdr.disable();
    // this.membershipForm.controls.memberNumberHdr.disable();
    // this.membershipForm.controls.designationHdr.disable();
    // this.membershipForm.controls.subscribeTypeHdr.disable();
  }

  submit() {
    if(this.memberForm.invalid){
      this.toastr.error("Kindly Fill the necessary field");
      return;
    }
      

    //console.log(this.memberForm.value);
    return this.httpClient.post<any>("http://localhost:9015/api/set/member",
      this.memberForm.value
    ). subscribe ( response => {
      if(response){
        console.log(response);
        this.data=response;
        if(response['status']=== "1"){
          this.toastr.success("Data Saved Successfully");
        }else{
          this.toastr.error("Member Number Already Exist Check the member sheet");
        }
        //this.clearClick();
      }
      
    });
  }
  clearClick(){
    this.memberForm.reset();
  }
  
}

