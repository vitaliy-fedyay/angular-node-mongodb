import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CreatePageComponent } from './components/create-page/create-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { AdminNavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuard } from './guards/admin.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent,
    CreatePageComponent,
    DashboardPageComponent,
    EditPageComponent,
    LoginPageComponent,
    AdminNavigationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '', component: AdminComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'dashboard', component: DashboardPageComponent, canActivate: [AdminGuard] },
          { path: 'create', component: CreatePageComponent, canActivate: [AdminGuard] },
          { path: 'post/:id/edit', component: EditPageComponent, canActivate: [AdminGuard] },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
