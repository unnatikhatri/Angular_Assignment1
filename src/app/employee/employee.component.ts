import { Component, OnInit } from '@angular/core';
import {FormData} from '../data/form-data';
import {FormBuilder, NgForm} from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  formData: FormData ={
       fname : "",
       lname : "",
       email : "",
       contact: 877088097,
       address : "",
       uname:"",
       pwd:"",
       gender:""
  }
  onSubmit(ngForm: NgForm) {

    console.log(this.formData.fname);
    console.log(this.formData.lname);
    console.log(this.formData.email);
    console.log(this.formData.contact);
    console.log(this.formData.address);
    console.log(this.formData.uname);
    console.log(this.formData.pwd);
   };

  }
