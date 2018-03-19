import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InterviewComponent } from './interview/interview.component';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    InterviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [InterviewComponent]
})
export class InterviewModule { }
