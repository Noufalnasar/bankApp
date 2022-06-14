import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pwd=""
  amount=""

  depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pwd: ['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]], 
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  acno1=""
  pwd1=""
  amount1=""

  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd1: ['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]], 
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
    })

    user:any
    lDate:any
    Acno=""

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    this.user=this.ds.currentUser
    this.lDate=new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("Please Log In")
      this.router.navigateByUrl("")
    }
  }


  deposit(){
    var acno=this.depositForm.value.acno
    var pwd=this.depositForm.value.pwd
    var amount=this.depositForm.value.amount
   
  const result=this.ds.deposit(acno,pwd,amount)
  if(result){
    alert(amount+"deposited successfully and new balance is :"+result)
  }
  }
  withdraw() {
    var acno1=this.withdrawForm.value.acno1
    var pwd1=this.withdrawForm.value.pwd1
    var amount1=this.withdrawForm.value.amount1
   

    const result1=this.ds.withdraw(acno1,pwd1,amount1)
    if(result1){
      alert(amount1+"success and new balance is :"+result1)
    }
  }
  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
    
  }
  deleteAccount(){
    this.Acno=JSON.parse(localStorage.getItem("currentAcno")||' ')
    }
    cancel(){
      this.Acno=""
    }
}
