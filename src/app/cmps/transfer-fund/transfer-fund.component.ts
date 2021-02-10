import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  constructor(private userService:UserService) { }
  @Input() contact=null
  coins:number=0
  

  ngOnInit(): void {

  }

  onTransfer(){
    const {coins,contact}=this
    this.userService.transferCoins(contact,coins)
    
  }


}
