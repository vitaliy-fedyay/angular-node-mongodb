import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePageComponent } from './create-page/create-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    CreatePageComponent,
    DashboardPageComponent,
    EditPageComponent,
    LoginPageComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'dashboard', component: DashboardPageComponent },
          { path: 'create', component: CreatePageComponent },
          { path: 'post/:id/edit', component: EditPageComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
