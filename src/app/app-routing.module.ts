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

const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    {path: "login", component: LoginComponent },
    {path: "register", component: RegisterComponent },
    {path: "dashboardlogin", component: LoginDashboardComponent },
    {path: "dashboard", component: DashboardComponent, children:
[ { path: "", redirectTo: "control", pathMatch: "full" },
{path: "control", component: ControlComponent },
{path: "edition/new", component: EditionComponent },
{path: "edition/change/:id", component: EditionComponent },
{ path: "admin", component: AdminComponent },
{ path: "contact", component: ContactComponent }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
