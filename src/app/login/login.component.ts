import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  am="your perfect partner"
  accnum="Account number please"
  acno=""
  pwd=""


  loginform=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]] 
  })

 
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
// acnoChange(event:any){
//   this.acno=event.target.value
//   console.log(this.acno);
  
  
// }
// pwdChange(event:any){
//   this.pwd=event.target.value
//   console.log(this.pwd);

// }

// one way bndng / two way bndng
Login(){
  var acno=this.loginform.value.acno
  var pwd=this.loginform.value.pwd

  if(this.loginform.valid){
    const result = this.ds.login(acno, pwd);
    if (result) {
      alert("login successfull...!!");
      this.router.navigateByUrl("dashboard");
    }
    else {
      alert("user does not exist");
    }
  }
  else{
   alert("invalid form")
  }
 
}

}

//   if(acno in database){
//     if(pwd ==database[acno]["password"]){
//      alert("Login Successful")
//      this.router.navigateByUrl("dashboard")
//     }
//     else{
//       alert("Invalid Password")
//     }

//   }
//   else{
//     alert("user does not exist")
//   }
// }
// }
//template referencing variables
// Login(a:any,p:any){
//   var acno=a.value
//   var pwd=p.value

//   let database=this.database

//   if(acno in database){
//     if(pwd ==database[acno]["password"]){
//      alert("Login Successful")
//     }
//     else{
//       alert("Invalid Password")
//     }

//   }
//   else{
//     alert("user does not exist")
//   }
// }
// }


