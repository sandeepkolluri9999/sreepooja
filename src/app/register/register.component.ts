import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formclick: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }
  fullname;
  email;
  password;
 
  ngOnInit() {

  }
  submitRegister(formdata: NgForm) {
    this.formclick = true;
    this.fullname = formdata.value.name;
    this.email = formdata.value.email;
    this.password = formdata.value.password;

    const data = {
      crud: 'insert',
      fullName: this.fullname,
      email: this.email,
      password: this.password
    };
    this.http.post("http://localhost/sreepoojas/servicecall.php", data)
      .subscribe(
        (res: Response) => {
          this.email = '';
          this.password = '';
          this.fullname = '';

          //this.successmsg=true;
          this.router.navigate(['/','login' ]);

        });


  }
}



