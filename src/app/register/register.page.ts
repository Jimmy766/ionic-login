import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { User } from "../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User=new User();
  constructor(private auth:AuthService,private ruter:Router ) { }

  // registro
  async register(){
    const user=await this.auth.register(this.user);
    if(user){
      console.log('registrado');
      this.ruter.navigateByUrl('/');
    }
  }
  ngOnInit() {
  }

}
