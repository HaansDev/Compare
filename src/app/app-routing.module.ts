import { ContactComponent } from './components/dashboard/contact/contact.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { EditionComponent } from './components/dashboard/edition/edition.component';
import { ControlComponent } from './components/dashboard/control/control.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginDashboardComponent } from './components/login-dashboard/login-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailLaptopComponent } from './components/detail-laptop/detail-laptop.component';
import { CompareLaptopsComponent } from './components/compare-laptops/compare-laptops.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { GuideChooseLaptopComponent } from './components/guide-choose-laptop/guide-choose-laptop.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    { path: "laptops", redirectTo: "laptops/1", pathMatch:"full" },
    { path: "laptops/:page", component: LaptopsComponent },
    { path: "laptop/:id", component: DetailLaptopComponent },
    { path: "compare/:id1/:id2/:id3/:id4", component: CompareLaptopsComponent },
    { path: "compare/:id1/:id2/:id3", component: CompareLaptopsComponent },
    { path: "compare/:id1/:id2", component: CompareLaptopsComponent },
    { path: "guide-choose-laptop", component: GuideChooseLaptopComponent },
    { path: "legal-notice", component: LegalNoticeComponent },
    { path: "privacy-policy", component: PrivacyPolicyComponent },
    { path: "about-us", component: AboutUsComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "dashboardlogin", component: LoginDashboardComponent },
    { path: "dashboard", component: DashboardComponent, children:[
        { path: "", redirectTo: "control/1", pathMatch: "full" },
        { path: "control", redirectTo: "control/1", pathMatch: "full" },
        { path: "control/:page", component: ControlComponent },
        { path: "edition/new", component: EditionComponent },
        { path: "edition", redirectTo: "edition/new", pathMatch: "full" },
        { path: "edition/change/:id", component: EditionComponent },
        { path: "admin", component: AdminComponent },
        { path: "contact", component: ContactComponent }
    ], canActivate: [AuthGuardService], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
  })
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
