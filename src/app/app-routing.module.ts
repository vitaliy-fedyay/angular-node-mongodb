import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'post/:id', component: PostPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
