import { Component, Injectable } from '@angular/core';
import { UserService } from '../service/user.service';

interface UsersInterface {
  id: number;
  name?: string;
  surname?: string;
  birthDate?: any;
  phone?: any;
  city?: string;
  street?: any;
  number?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './interview.component.html'
})

export class InterviewComponent {
  title = 'Interview App';
  users: Array<UsersInterface> = [];
  userId: number;

  constructor(private userService: UserService) {}

  findAll = function () {
      this.userService.findAllUsers().subscribe((data) => {
        this.users = data;
      }, err =>  alert('Error'));
  };

  findUser = function () {
    this.userService.findUser().subscribe((data) => {
      this.users = data;
    }, err =>  alert('Error'));
  };
}
