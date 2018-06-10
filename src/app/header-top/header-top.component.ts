import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service'
@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  constructor(private userservice: UserserviceService) { }
  isuservalid = false;
  ngOnInit() {
    this.userservice.mysubobs.subscribe((responce)=> {
      this.isuservalid =responce ;
    });
  }

  logoutclick(){
    this.userservice.updateuservalid(false); 
  }

}