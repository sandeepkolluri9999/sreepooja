import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
mysubobs=new BehaviorSubject(false);
updateuservalid(data){
  this.mysubobs.next(data);
}
userDetails;
userDet = new BehaviorSubject('recId');

  setUserDetails(recId){
    this.userDet.next(recId);
    this.userDetails=recId;
  }
  getUserDetails(){
    return this.userDetails;
  }
}
