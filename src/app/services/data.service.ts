import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //login username
  currentUser:any

  //login acno
  currentAcno:any

  //database
  userDetails: any = {
    1000: { acno: 1000, username: 'John', password: 1000, balance: 5000, transaction:[] },
    1001: { acno: 1001, username: 'Johnny', password: 1001, balance: 5400, transaction:[] },
    1002: { acno: 1002, username: 'Johnson', password: 1002, balance: 9800, transaction:[] }
  }
  
  constructor() { }

  //register
  register(acno:any, username:any, password:any){
    let userDetails= this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]= {
        acno,//as key and value are same this representation is allowed
        username,
        password,
        balance: 0,
        transaction:[]
      }
      console.log(userDetails);
      return true
    }
  }


  login(acno:any,pswd:any) {
    
    let userDetails = this.userDetails
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        this.currentUser = userDetails[acno]['username']
        return true
      }
      else {
        alert('Incorrect password')
        return false
      }
    }
    else {
      alert('User doesnot exist')
      return false
    }
  }

  //deposit
  deposit(acno:any,pswd:any,amt:any){
    let userDetails = this.userDetails
    let amount= parseInt(amt)// as amount is not an integer, we parse it
    if(acno in userDetails){
      if(pswd== userDetails[acno]['password']){
        userDetails[acno]['balance']+= amount
        userDetails[acno]['transaction'].push({
          type: 'credit',
          amount
        })
        return userDetails[acno]['balance']
      }
      else{
        alert('incorrect password')
        return false
      }
    }
    else{
      alert('User doesnot exist')
      return false
    }
  }

  //withdraw
  withdraw(acno:any,pswd:any,amt:any){
    let userDetails = this.userDetails
    let amount= parseInt(amt)// as amount is not an integer, we parse it
    if(acno in userDetails){
      if(pswd== userDetails[acno]['password']){

        if(userDetails[acno]['balance']>amount){
          userDetails[acno]['balance']-= amount
          userDetails[acno]['transaction'].push({
            type: 'debit',
            amount
          })
          return userDetails[acno]['balance']
        }
      }
      else{
        alert('Insufficient balance')
        return false
      }
    }
    else{
      alert('User doesnot exist')
      return false
    }
  }

  //transaction
  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }
}
