import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './interview.component.html'
})
export class ModifyUserComponent {
  users = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  edit = function (user: any) {
    let ids = [];

    if (Array.isArray(user)) {
      for (let i = 0; i < user.length; i++) {
        ids.push(user[i].id);
      }

      this.userService.editUser(ids, {}).subscribe((data) => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id === data.id) {
            this.users[i] = data;
          }
        }
        alert('User Updated');
      }, err => alert('Couldnt update user'));
    } else {
      this.userService.editUser(user.id, {}).subscribe((data) => {
        this.users[this.users.indexOf(user.id)] = data;
        alert('User Saved');
      }, err => alert('Couldnt update user'));
    }
  };

  remove = function (userId: any) {
    this.userService.removeUser(userId, {}).subscribe((data) => {
        let index = this.users.indexOf(userId);
        this.users.splice(index, 1);
        alert('User Removed');
    }, err => alert('Couldnt Remove'));
  };
}
