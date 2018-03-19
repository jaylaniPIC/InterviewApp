import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {
  options: any;
  jsonHeaders = new Headers();
  users = [
    {
      id: '0',
      name: 'name0',
      surname: 'surname0',
      birthDate: '24-8-1981',
      phone: '634523125',
      city: 'Wroclaw',
      street: 'Mydlana',
      number: '1'
    },
    {
      id: '1',
      name: 'name1',
      surname: 'surname1',
      birthDate: '28-9-1983',
      phone: '812312312',
      city: 'Warsaw',
      street: 'Domaniewska',
      number: '2'
    },
    {
      id: '2',
      name: 'name2',
      surname: 'surname2',
      birthDate: '01-6-1983',
      phone: '987654412',
      city: 'Wroclaw',
      street: 'Mydlana',
      number: '2'
    },
    {
      id: '3',
      name: 'name3',
      surname: 'surname3',
      birthDate: '05-5-1978',
      phone: '812312312',
      city: 'Wroclaw',
      street: 'Himalajska'
    }
  ];

  constructor(private http: Http) { }

  // Find all users in db
  findAllUsers() {
    return this.http.get('/findall', this.options).map((res => res.json()));
  }

  // Find a particular user from the db
  findUser(userId: any) {
    return this.http.get('/find&userId=' + userId, this.options).map((res => res.json()));
  }

  // Edit a particular user from db
  editUser(userId: any, data: any) {
    return this.http.post('/edit&userId=' + userId, data, this.options).map((res => res.json()));
  }

  // Remove a user from db
  removeUser(userId: any) {
    return this.http.post('/edit&userId=' + userId, {}, this.options).map((res => res.json()));
  }

  // Get the users stored in local variable
  getUsers() {
    return this.users;
  }

}
