import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-river-item',
  templateUrl: './river-item.component.html',
  styleUrls: ['./river-item.component.css']
})
export class RiverItemComponent implements OnInit {
  constructor(private router:Router) { }
  
  @Input() item;
  ngOnInit() {
  }
  viewDetails(){
    this.router.navigate(['/','Punyakeshetramdetails']);
  }
}
