import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-poojas',
  templateUrl: './poojas.component.html',
  styleUrls: ['./poojas.component.css']
})
export class PoojasComponent implements OnInit {

  
  constructor(private http:HttpClient) { }
  ngOnInit() {
    const url="http://localhost/sreepoojas/servicecall.php";
    let data={crud:'fetchallpoojas'};
    this.http.post(url,data)
     .subscribe(
    (res)=>{
        console.log(res);
},
err => {
  console.log("no data available");
});
}
}
