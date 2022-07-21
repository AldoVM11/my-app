import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HeaderComponent } from './partial/header/header.component';
import { MenuComponent } from './partial/menu/menu.component';
import { FooterComponent } from './partial/footer/footer.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { MainComponent } from './admin/main/main.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CommentsComponent } from './pages/comments/comments.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    AboutComponent,
    NotfoundComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MaintenanceComponent,
    MainComponent,
    BlogComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
