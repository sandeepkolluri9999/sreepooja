import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poojadetails',
  templateUrl: './poojadetails.component.html',
  styleUrls: ['./poojadetails.component.css']
})
export class PoojadetailsComponent implements OnInit {
  poojadata;
  constructor(private router:ActivatedRoute){

  }
  ngOnInit() {
   this.router.params.subscribe((data)=>{

   });
}
}