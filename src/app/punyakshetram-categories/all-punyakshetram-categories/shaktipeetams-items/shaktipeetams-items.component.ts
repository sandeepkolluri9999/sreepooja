import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shaktipeetams-items',
  templateUrl: './shaktipeetams-items.component.html',
  styleUrls: ['./shaktipeetams-items.component.css']
})
export class ShaktipeetamsItemsComponent implements OnInit {

  constructor() { }
  data = [];

  ngOnInit() {
    let desc="According to the Hindu Culture,Engagement According to the Hindu Culture,Engagement";
    for (var i = 12; i <= 16; i++) {
      var item = {
        heading: "Engagement" + i,
        imagepath: "../assets/images/" + i + '.jpg',
        imagepath1: "../assets/images/" + i + 'A- Copy.jpg',
        bigdescription:desc,
        smalldesc: desc.substr(0, 30)
      };
      this.data.push(item);
    }
  }
}
