import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;
  isRegisterPage:boolean = false;

  constructor(private router:Router,private api:ApiService) { }

  ngOnInit() {
  }

  login(){
    //CHALLANGE  is just a object used to pass username and password to the backed
    let challange = {
      userName: this.userName,
      password: this.password
    }
  //  TODO call api here with the above challange

    this.api.login(challange).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/home']);

    },err=>{
      console.log(err);
    })

  }
}
