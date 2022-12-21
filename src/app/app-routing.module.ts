import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { LoginComponent } from './component/login/login.component';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AuthenticationGuard } from './component/AuthGaurd/authentication.guard'; 
import { PlaceOrderComponent } from './component/place-order/place-order.component';
const routes: Routes = [
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/login", pathMatch: 'full', },
  {
    path: 'dashboard', component: DashboardComponent,canActivate: [AuthenticationGuard],
    children: [
      
      { path: "books", component: GetallbookComponent },
      { path: 'quickview',component:QuickViewComponent},
      { path: 'cart',component:CartComponent },
      {path:"wishlist", component:WishlistComponent},
      {path:'order', component: PlaceOrderComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


