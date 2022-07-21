import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { MainComponent } from './admin/main/main.component';
import { AuthGuard } from './guard/auth.guard';
import { BlogComponent } from './pages/blog/blog.component';
import { CommentsComponent } from './pages/comments/comments.component';
const routes:Routes = [
{
  path:'home',component: HomeComponent, title: "Homepage"
},
{
  path:'admin',component: MainComponent, title: "Admin",canActivate : [ AuthGuard ]
},
{
  path:'about',component: AboutComponent, title: "About"
},
{
  path:'dashboard',component: DashboardComponent, title:"dashboard"
},
{
  path:'login', component: LoginComponent, title:"login"
},
{
  path:'maintenance', component: MaintenanceComponent, title:"maintenance"
},
{
  path:'blog', component: BlogComponent, title:"blog"
},
{
  path:'comments/:id', component: CommentsComponent, title:"Comments"
},
{
  path:'',pathMatch:'full',redirectTo:'/home'
},
{
  path:'**',component: NotfoundComponent, title:"NotFound"
}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
