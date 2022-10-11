import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {DetailComponent} from './detail/detail.component';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {VerityResetPasswordComponent} from './verity-reset-password/verity-reset-password.component';
import {Toast, ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';
import {CartComponent} from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    DetailComponent,
    ListComponent,
    ResetPasswordComponent,
    VerityResetPasswordComponent,
    CreateComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
