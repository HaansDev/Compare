
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/dashboard/contact/contact.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { EditionComponent } from './components/dashboard/edition/edition.component';
import { ControlComponent } from './components/dashboard/control/control.component';
import { LoginDashboardComponent } from './components/login-dashboard/login-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailLaptopComponent } from './components/detail-laptop/detail-laptop.component';
import { CompareLaptopsComponent } from './components/compare-laptops/compare-laptops.component';
import { LaptopsComponent } from './components/laptops/laptops.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NpnSliderModule } from "npn-slider";
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { CartLaptopsComponent } from './components/cart-laptops/cart-laptops.component';
import { GuideChooseLaptopComponent } from './components/guide-choose-laptop/guide-choose-laptop.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LoginDashboardComponent,
    DashboardComponent,
    ControlComponent,
    EditionComponent,
    AdminComponent,
    ContactComponent,
    DetailLaptopComponent,
    CompareLaptopsComponent,
    LaptopsComponent,
    ScrollTopComponent,
    CartLaptopsComponent,
    GuideChooseLaptopComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NpnSliderModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
    },{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
