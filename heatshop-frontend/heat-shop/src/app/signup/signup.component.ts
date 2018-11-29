import { Component, OnInit } from '@angular/core';
import { User } from "../../model/user";

import { UserService } from "../../service/user";
import { AuthService } from "../../service/auth";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = <User>{};

  constructor(private userService: UserService,
              private authService: AuthService) {
  }

  ngOnInit() {

  }

  onSave() {
    this.authService.newUser(this.user);
  }


  onTest() {
    const users: User[] = this.userService.getUsers();
    for (const user of users) {
      console.log(user.name);
    }
  }

}
