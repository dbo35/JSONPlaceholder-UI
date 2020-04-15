import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'posts',
    component: DashboardComponent
  },
  {
    path: 'posts/:id',
    redirectTo: ''
  },
  {
    path: 'posts/:id/comments',
    redirectTo: ''
  },
  {
    path: 'users',
    redirectTo: ''
  },
  {
    path: 'users/:id',
    redirectTo: ''
  },
  {
    path: 'users/:id/posts',
    redirectTo: ''
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
    path: '',
    component: AppComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
