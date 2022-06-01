import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database:any = {
    1000:{acno:1000,uname:"luis",password:1000,balance:5000},
    1001:{acno:1001,uname:"raj",password:1001,balance:3000},
    1002:{acno:1002,uname:"cyril",password:1002,balance:4000}

  }

  constructor() { }

  register(uname:any,acno:any,password:any){

    let database = this.database
    if(acno in database){
      // already regstred
      return false
    }
    else{
      //add details to database
      database[acno]={
        acno,
        uname,
        password,
        balance:0
      }
      console.log(database);
      
      return true
    }

  }
  deposit(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.database
    if(acno in db){
      if(password==db[acno]["password"]){
        db[acno]["balance"]+=amount
        return db[acno]["balance"]
      }
      else{
        alert("incorrect password...")
        return false
      }

    }
    else{
      alert("user does not exist")
      return false
    }
  }
  withdraw(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.database
    if(acno in db){
      if(password==db[acno]["password"])
      {
        if(db[acno]["balance"]>amount)
      {
        db[acno]["balance"]-=amount
        return db[acno]["balance"]
      }
      else{
        alert("insufficent balance")
       return false
      }
      }
      
      else{
        alert("incorrect password")
        return false
      }
    }
    else{
      alert("user does not exist")
      return false
    }
  }
}
