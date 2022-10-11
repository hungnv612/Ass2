import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {VerityResetPasswordComponent} from './verity-reset-password/verity-reset-password.component';
import {CreateComponent} from './create/create.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list', component: ListComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'verify-reset-password/:name', component: VerityResetPasswordComponent},
  {path: 'create', component: CreateComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
