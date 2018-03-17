import { TestBed, ComponentFixture, async, inject, getTestBed } from '@angular/core/testing';
import { DebugElement, NgModule, ChangeDetectorRef, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ModifyUserComponent } from './modify-user.component';
import { UserService } from './user.service';

let comp: ModifyUserComponent;
let fixture: ComponentFixture<ModifyUserComponent>;
let userService: UserService;

class UserServiceMock {
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
    }];

  findAllUsers() {
    return Observable.of(this.users);
  }

  findUser(userId: any) {
    return Observable.of(this.users);
  }

  editUser(userId: any, data: any) {
    return Observable.of(this.users);
  }

  removeUser(userId: any) {
    return Observable.of(this.users);
  }

  getUsers() {
    return this.users;
  }
}

@NgModule({
  declarations: [ModifyUserComponent],
  providers: [{ provide: UserService, useClass: UserServiceMock }],
  exports: [],
  entryComponents: [ModifyUserComponent],
  imports: [BrowserModule,
    HttpModule]
})

export class Modify { }

describe('ModifyUserComponent', () => {
  let injector: Injector;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Modify]
    });
    injector = getTestBed();
    fixture = TestBed.createComponent(ModifyUserComponent);
    comp = fixture.componentInstance;
  }));

  describe('Loading component', () => {
    it('should create the app', async(() => {
      expect(comp).toBeTruthy();
    }));
  });

  describe('Modify users', () => {
    it('should check the findall function', inject([UserService], (userService: UserService) => {
      comp.edit(1);
      expect(comp.users).not.toBeNull();
    }));

    it('should check the find function', inject([UserService], (userService: UserService) => {
      comp.remove(2);
      expect(comp.users).not.toBeNull();
    }));
  });

});
