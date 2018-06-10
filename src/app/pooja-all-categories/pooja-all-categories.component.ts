import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pooja-all-categories',
  templateUrl: './pooja-all-categories.component.html',
  styleUrls: ['./pooja-all-categories.component.css']
})
export class PoojaAllCategoriesComponent {
 
  poojas = [];
  data1;
allpoojas;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const url = 'http://localhost/sreepoojas/servicecall.php';
    this.route.params.subscribe(data => {
      if (data.categoryId == 'all' || data.categoryId>3) {
        this.poojas=[];
        this.data1 = {
          crud: 'login',
          tableName: 'poojas'
        }
        this.http.post(url, this.data1).subscribe((res: any) => {
          if (res) {
            let itemsLength = res.length;
            for (var item = 0; item < itemsLength; item++) {
              this.poojas.push(res[item]);
            }
          }
          else {
            console.log('failed');
          }
        }, err => {
          console.log('Error');
        });
      }
      else {
        this.poojas=[];
        parseInt(data.categoryId);
        this.data1 = {
          crud: 'fetchallpoojas',
          tableName: 'poojas',
          categoryId: parseInt(data.categoryId)
        }
        this.http.post(url, this.data1).subscribe((res: any) => {
          if (res) {
            let itemsLength = res.length;
            for (var item = 0; item < itemsLength; item++) {
              this.poojas.push(res[item]);
            }
          }
          else {
            console.log('failed');
          }
        }, err => {
          console.log('Error');
        });
      }
    
      });

  }
 
}
