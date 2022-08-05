import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  //to hold acno of current User
  acno:any
  //to hold transaction array of current user
  transactions:any

  constructor(private ds:DataService) {
    //get value value of current acno from data service
    this.acno = this.ds.currentAcno
    //to get transaction array from data service
    this.transactions= this.ds.getTransaction(this.acno)
   }


  ngOnInit(): void {
  }

}
