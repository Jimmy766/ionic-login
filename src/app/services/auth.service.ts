import { Injectable } from '@angular/core';
import {AngularFireAuth}from '@angular/fire/auth';
import {  User} from "../models/user";
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged:any=false;
  constructor(public afAuth:AngularFireAuth) { 
    afAuth.authState.subscribe(user=>(this.isLogged=user));
    afAuth.auth.onAuthStateChanged(user=>(this.isLogged=user));
  }
  
  // login
  async login(user:User){
    try {
      this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async ()=>{
        return await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      })
      //return await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
    } catch (error) {
      console.log("error en login: "+error);
    }
  }
  //register
  async register(user:User){
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
    } catch (error) {
      console.log("error en login: "+error);
    }
  }
  async loginFace(){
    try {
      let c=new firebase.auth.FacebookAuthProvider();
      
      await this.afAuth.auth.signInWithPopup(c).then(res=>{
        console.log(res.user.toJSON());
      },error=>{
        console.log("error :"+error)
      });
    } catch (error) {
      console.log("error en login: "+error);
    }
  }
  async loginGoogle(){
    try {

      let c=new firebase.auth.GoogleAuthProvider();
      
      await this.afAuth.auth.signInWithPopup(c).then(res=>{
        console.log(res.user.toJSON());
      },error=>{
        console.log("error :"+error)
      });
    } catch (error) {
      console.log("error en login: "+error);
    }
  }
}
