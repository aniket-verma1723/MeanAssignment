import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { LoginContainerComponent } from './login-container/login-container.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch: 'full'
  },
  {
    path :'login',
    component:LoginContainerComponent
  },
  {
    path:'menu',
    component : MenuContainerComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
