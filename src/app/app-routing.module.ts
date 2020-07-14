import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './start/start.component';
import {LoginComponent} from './login/login.component';
import {AuthControlGuard} from './auth-control.guard';
import {ClickerComponent} from './clicker/clicker.component';
import {StatisticsComponent} from './statistics/statistics.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'start',
    component: StartComponent,
    canActivate: [AuthControlGuard]
  },
  {
    path: 'clicker',
    component: ClickerComponent,
    canActivate: [AuthControlGuard]
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [AuthControlGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
