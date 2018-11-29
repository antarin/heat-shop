import { Component, OnInit } from '@angular/core';
import { User } from "../../model/user";
import { AuthService } from "../../service/auth";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User = <User>{};

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.signInRegular(this.user.email, this.user.password).then( res => {
      console.log(res.user.email);
      alert(res.user.email);
    },
      error => console.log(error));
  }

}
