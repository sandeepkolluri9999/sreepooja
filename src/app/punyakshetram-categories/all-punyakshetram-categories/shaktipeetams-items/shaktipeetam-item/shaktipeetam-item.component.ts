import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shaktipeetam-item',
  templateUrl: './shaktipeetam-item.component.html',
  styleUrls: ['./shaktipeetam-item.component.css']
})
export class ShaktipeetamItemComponent implements OnInit {
  constructor(private router:Router) { }
  
  @Input() item;
  ngOnInit() {
  }
  viewDetails(){
    this.router.navigate(['/','Punyakeshetramdetails']);
  }
}
