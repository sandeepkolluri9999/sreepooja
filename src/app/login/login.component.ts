import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
     private http: HttpClient) { }

  ngOnInit() {
  }
  submitClick: boolean = false;
  email;
  password;
  submitLogin(formdata: NgForm) {
    if (formdata.valid) {
      this.email = formdata.value.email;
      this.password = formdata.value.password;
      if (this.email && this.password) {
        // console.log(formdata.value);
        // alert('ok');

        this.router.navigate(['/', 'home']);
      }
      else {
        // this.submitClick = true;
      }
    }
    else {
      this.submitClick = true;
    }
    const data = {
      crud: 'login',
      Email: this.email,
      Password: this.password
    };
    this.http.post("http://localhost/sreepoojas/servicecall.php",
      data)
      .subscribe(
        (res: Response) => {
          if (res) {
            this.router.navigate(['/', 'home']);
          }
          
        },
        (err) => {
          this.router.navigate(['/', 'login']);
        }
      );

  }


}
