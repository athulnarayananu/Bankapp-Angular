import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //property / variable

  aim = 'Your Perfect Banking Partner'

  account = 'Enter your account here'

  acno =''
  pswd =''

  //database
  userDetails:any = {
    1000:{acno:1000,uname:'John',pswd:1000,balance:5000},
    1001:{acno:1001,uname:'Johnny',pswd:1001,balance:5400},
    1002:{acno:1002,uname:'Johnson',pswd:1002,balance:9800}
  }

  //constructor- to instantiate obj in a class
  constructor() { }//first operation performed in component creation

  //ngOnInit- life cycle hook of angular
  ngOnInit(): void {//secondly executed
  }
  //user defined fn


  //acnoChange
  acnoChange(event:any){
    this.acno = event.target.value
    console.log(this.acno);
    
  }

  //pswdChange
  pswdChange(event:any){
    this.pswd = event.target.value
    console.log(this.pswd);
    
  }

  //login
  // login(){
    
  //   var acno = this.acno
  //   var pswd = this.pswd

  //   let userDetails = this.userDetails

  //   if(acno in userDetails){
  //     if(pswd == userDetails[acno]['password']){
  //       alert('login successful')
  //     }
  //     else{
  //       alert('Incorrect password')
  //     }
  //   }
  //   else{
  //     alert('User doesnot exist')
  //   }
  // }

  //login using 2 arguments- template referencing
  login(a:any,p:any){
    console.log(a.value);

    var acno = a.value
    var pswd = p.value
    

    let userDetails = this.userDetails

    if(acno in userDetails){
      if(pswd == userDetails[acno]['password']){
        alert('login successful')
      }
      else{
        alert('Incorrect password')
      }
    }
    else{
      alert('User doesnot exist')
    }
  }
}
