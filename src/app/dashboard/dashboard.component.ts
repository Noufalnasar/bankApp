import { Component, OnInit } from '@angular/core';
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

  acno1=""
  pwd1=""
  amount1=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }


  deposit(){
    var acno=this.acno
    var pwd=this.pwd
    var amount=this.amount
    if(amount.length==0){
      alert("please enter the amount")
    }
  const result=this.ds.deposit(acno,pwd,amount)
  if(result){
    alert(amount+"deposited successfully and new balance is :"+result)
  }
  }
  withdraw() {
    var acno1=this.acno1
    var pwd1=this.pwd1
    var amount1=this.amount1
    if(amount1.length==0){
      alert("please enter the amount")
    }

    const result1=this.ds.withdraw(acno1,pwd1,amount1)
    if(result1){
      alert(amount1+"success and new balance is :"+result1)
    }
  }
}