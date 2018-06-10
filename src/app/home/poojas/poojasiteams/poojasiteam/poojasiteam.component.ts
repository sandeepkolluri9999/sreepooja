import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-poojasiteam',
  templateUrl: './poojasiteam.component.html',
  styleUrls: ['./poojasiteam.component.css']
})
export class PoojasiteamComponent  {

  constructor(private router:Router) { }
  @Input() poojaitem;
  item;
  ngOnInit(){
  this.item=this.poojaitem;
  console.log('pooja item',this.item);
  }
  viewdetails(poojaid){
    this.router.navigate(['poojadetails/'+poojaid]);
  }
  
}
