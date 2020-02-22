import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { User } from "../models/user";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:User=new User();
  constructor(private auth:AuthService,private ruter:Router ) { }

  // login
  async login(){
    const user=await this.auth.loginFace();
    if(this.auth.isLogged){
      console.log('logueado');
      this.ruter.navigateByUrl('/');
    }
  }
  ngOnInit() {
  }

}
