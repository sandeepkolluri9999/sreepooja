import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-poojasiteams',
  templateUrl: './poojasiteams.component.html',
  styleUrls: ['./poojasiteams.component.css']
})
export class PoojasiteamsComponent {

  constructor(private http: HttpClient) { }
  poojadata = [];

  ngOnInit() {
  
    const url="http://localhost/sreepoojas/servicecall.php";
    let data={
      crud:'fetchallpoojas'};
    this.http.post(url,data).subscribe(
      (res:any)=>{
        console.log(res);
       // console.log('res');
       for(var i=0;i<res.length;i++){
        this.poojadata.push(res[i]);
       }
        // this.poojadata=res;
       // console.log(this.poojadata);
        
      },
      err=>{
        console.log(err);
      }

    );
  }

}
