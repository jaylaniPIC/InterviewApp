import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { InterviewComponent } from './app/interview.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/InterviewModule', pathMatch: 'full'},
      { path: 'Interview', loadChildren: 'app/interview.module',  data: { preload: true } },
      { path: 'ModifyUser', loadChildren: 'app/interview.module#ModifyUser',  data: { preload: true } },
      { path: '**', redirectTo: '' }
    ], { useHash: true, preloadingStrategy: PreloadAllModules }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
