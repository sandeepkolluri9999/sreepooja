import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../../userservice.service';
@Component({
  selector: 'app-pooja-all-categorie-item',
  templateUrl: './pooja-all-categorie-item.component.html',
  styleUrls: ['./pooja-all-categorie-item.component.css']
})
export class PoojaAllCategorieItemComponent implements OnInit {

  @Input() poojaItem;
  item;
  constructor(private router: Router,private userSevice:UserserviceService) { }

  ngOnInit() {
    this.item = this.poojaItem;
  }
  viewDetails() {
    this.router.navigate(['/poojadetails/'+this.item.recId]);
  }
  bookNow(id) {
    if(this.userSevice.userDetails){
      this.router.navigate(['/bookNow/' + id]);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
