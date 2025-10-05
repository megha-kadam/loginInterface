import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AuthGuard } from './shared/services/auth.guard';
import { UserDetailComponent } from './shared/components/user-detail/user-detail.component';

const routes: Routes = [
  {
    path : '',
    component : AuthComponent,
    canActivate : [AuthGuard]
  },
  {
    path : ':id',
    component : UserDetailComponent,
    title : 'User Detail',
    //canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
