import { TestBed, ComponentFixture, async, inject, getTestBed } from '@angular/core/testing';
import { DebugElement, NgModule, ChangeDetectorRef, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { InterviewComponent } from './interview.component';
import { UserService } from './user.service';

let comp: InterviewComponent;
let fixture: ComponentFixture<InterviewComponent>;
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
}

@NgModule({
  declarations: [InterviewComponent],
  providers: [{ provide: UserService, useClass: UserServiceMock }],
  exports: [],
  entryComponents: [InterviewComponent],
  imports: [BrowserModule,
    HttpModule]
})

export class Interview { }

describe('InterviewComponent', () => {
  let injector: Injector;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Interview]
    });
    injector = getTestBed();
    fixture = TestBed.createComponent(InterviewComponent);
    comp = fixture.componentInstance;
  }));

  describe('Loading component', () => {
    it('should create the app', async(() => {
      expect(comp).toBeTruthy();
    }));

    it(`should have as title 'Interview App'`, async(() => {
      expect(comp.title).toEqual('Interview App');
    }));

    it('should render title in a h1 tag', async(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to Interview App!');
    }));
  });

  describe('Find users', () => {
    it('should check the findall function', inject([UserService], (userService: UserService) => {
      comp.findAll();
      expect(comp.users).not.toBeNull();
    }));

    it('should check the find function', inject([UserService], (userService: UserService) => {
      comp.findUser();
      expect(comp.users).not.toBeNull();
    }));
  });

});
