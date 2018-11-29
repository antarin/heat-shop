import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../model/user';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  users: User[] = [];

  constructor(private db: AngularFireDatabase) {

  }

  saveUser(user: User) {
    user.password = this.hashPassword(user.password);
    console.log(user.password);
    this.db.list<User>('user').push(user);
  }

  getUsers(): User[] {
    this.db.list<User>('user').valueChanges().subscribe((data: User[]) => {
      this.users = data;
        return this.users;
    },
      error => console.log(error));
    return this.users;
  }

  hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }
}
