import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-punyakshetram-category-item',
  templateUrl: './all-punyakshetram-category-item.component.html',
  styleUrls: ['./all-punyakshetram-category-item.component.css']
})
export class AllPunyakshetramCategoryItemComponent implements OnInit {

  constructor(private router:Router) { }
@Input() item;
  ngOnInit() {
  }
  viewDetails(){
    this.router.navigate(['/','Punyakeshetramdetails']);
  }
}
