import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //property / variable

  aim = 'Your Perfect Banking Partner'

  account = 'Enter your account here'

  acno = ''
  pswd = ''


  //constructor- to instantiate obj in a class
  //first operation performed in component creation
  constructor(private router:Router, private ds:DataService) { }//dependency injection

  //ngOnInit- life cycle hook of angular
  ngOnInit(): void {//secondly executed
  }
  //user defined fn

  //login
  login() {
    var acno = this.acno
    var pswd = this.pswd

    const result = this.ds.login(acno,pswd)
    if(result){
      alert('login successful')
        this.router.navigateByUrl('dashboard')
    }
  }

  //login using 2 arguments- template referencing
}
