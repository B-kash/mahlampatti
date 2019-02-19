import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;
  isRegisterPage:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    //CHALLANGE  is just a object used to pass username and password to the backed
    let challange = {
      userName: this.userName,
      password: this.password
    }
  //  TODO call api here with the above challange

  //  after calling the api route it to the home page
  //  TODO later add this line of code for routing to homeComponent also add Home component
  //   this.router.navigate(['/home']);

  }
}
