import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../model/user";

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth,
              private router: Router) {

    this.user = _firebaseAuth.authState;
  }

    newUser(user: User){
      this._firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(res => {
        console.log(res);
      })
        .catch(error => console.log(error));
    }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
