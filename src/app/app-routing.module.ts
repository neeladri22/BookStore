import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { LoginComponent } from './component/login/login.component';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full', },
      { path: "books", component: GetallbookComponent },
      { path: 'quickview',component:QuickViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


