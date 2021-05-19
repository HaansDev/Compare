
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

import { HttpClientModule } from '@angular/common/http';

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



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
