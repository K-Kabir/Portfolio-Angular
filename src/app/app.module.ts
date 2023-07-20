import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { EducationComponent } from './Components/education/education.component';
import { FooterComponent } from './Components/footer/footer.component';
import { appIntersectionObserver } from 'src/Directives/IntersectionObserver.directive';
import { AppRoutingModule } from './app-routing.module';
import { SkillsComponent } from './Components/skills/skills.component';
import { WorkComponent } from './Components/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    FooterComponent,
    appIntersectionObserver,
    SkillsComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
