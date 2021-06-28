import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./features/dashboard/dashboard.component";
// import {SubscriptionComponent} from "./features/subscription/subscription.component";
import {DazzlingDebtComponent} from "./features/dazzling-debt/dazzling-debt.component";
import {LoginComponent} from "./features/login/login.component"
import { CreateSubscriptionComponent } from './features/subscription/create-subscription/create-subscription.component';
import { ViewSubscriptionComponent } from './features/subscription/view-subscription/view-subscription.component';
import { CreateMemberComponent } from './features/member/create-member/create-member.component';
import { ViewMemberComponent } from './features/member/view-member/view-member.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path : 'create-member', component : CreateMemberComponent,canActivate:[AuthGuard]},
  { path : 'view-member', component : ViewMemberComponent,canActivate:[AuthGuard]},
  { path : 'dashboard',  component : DashboardComponent,canActivate:[AuthGuard]},
  // { path : 'subscription',  component : SubscriptionComponent,canActivate:[AuthGuard]},
  { path : 'dazzling-debt',   component:DazzlingDebtComponent,canActivate:[AuthGuard]},
  { path : 'login',   component:LoginComponent},
  { path : 'create-subscription' , component:CreateSubscriptionComponent,canActivate:[AuthGuard]},
  { path : 'view-subscription' , component:ViewSubscriptionComponent,canActivate:[AuthGuard]},
  { path : '**' , redirectTo:'/dashboard',canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
