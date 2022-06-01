import { Component, OnInit } from '@angular/core';
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

 
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
acnoChange(event:any){
  this.acno=event.target.value
  console.log(this.acno);
  
  
}
pwdChange(event:any){
  this.pwd=event.target.value
  console.log(this.pwd);

}

// one way bndng / two way bndng
Login(){
  var acno=this.acno
  var pwd=this.pwd

  let database=this.ds.database

  if(acno in database){
    if(pwd ==database[acno]["password"]){
     alert("Login Successful")
     this.router.navigateByUrl("dashboard")
    }
    else{
      alert("Invalid Password")
    }

  }
  else{
    alert("user does not exist")
  }
}
}
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


