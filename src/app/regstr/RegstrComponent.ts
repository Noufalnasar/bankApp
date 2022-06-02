import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-regstr',
  templateUrl: './regstr.component.html',
  styleUrls: ['./regstr.component.css']
})
export class RegstrComponent implements OnInit {
  uname = "";
  acno = "";
  pwd = "";

  //form group
  registerForm = this.fb.group({
    acno:[''],
    pwd:[''],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]


  })

  constructor(private ds: DataService, private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pwd = this.registerForm.value.pwd;
    console.log(this.registerForm.valid);
    // if(this.registerForm.get('uname')?.errors){
    //   alert("Invalid Username")
    // }

    if(this.registerForm.valid){
      const result = this.ds.register(uname, acno, pwd);
      if (result) {
        alert("succesfullly registered..!!!");
        this.router.navigateByUrl("");
      }
      else {
        alert("already exist...Please log in");
      }
    }
    else{
     alert("invalid form")
    }
   
  }

}
