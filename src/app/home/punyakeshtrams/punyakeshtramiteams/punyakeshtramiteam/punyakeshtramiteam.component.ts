import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-punyakeshtramiteam',
  templateUrl: './punyakeshtramiteam.component.html',
  styleUrls: ['./punyakeshtramiteam.component.css']
})
export class PunyakeshtramiteamComponent  {


 

  constructor(private router:Router) { }
@Input() item;
  ngOnInit(poojaId) {
  }
  viewDetails(){
    this.router.navigate(['/','Punyakeshetramdetails'+'/'+'poojaId']);
  }
}
