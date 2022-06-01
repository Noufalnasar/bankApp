import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    acno:'',
    pwd:'',
    uname:''
  })

  constructor(private ds: DataService, private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    var uname = this.uname;
    var acno = this.acno;
    var pwd = this.pwd;
    const result = this.ds.register(uname, acno, pwd);
    if (result) {
      alert("succesfullly registered..!!!");
      this.router.navigateByUrl("");
    }
    else {
      alert("already exist...Please log in");
    }
  }

}
