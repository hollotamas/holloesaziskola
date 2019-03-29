import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserProfilComponent } from './user/user-profil/user-profil.component';
import { UserAdminComponent } from './user/user-admin/user-admin.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent },
  {path: 'user',
    children: [
    {path: '', component: UserProfilComponent }, //
    {path: 'login', component: UserLoginComponent },
    {path: 'admin', component: UserAdminComponent },
    {path: ':userID', component: UserProfilComponent }
  ]},
  {path: 'about', component: AboutComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routTableComponent = [
    UserProfilComponent,
    UserLoginComponent,
    UserProfilComponent,
    UserAdminComponent,
    HomeComponent,
    AboutComponent
  ];
}
