import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { EducationComponent } from './Components/education/education.component';
import { WorkComponent } from './Components/work/work.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'skills', component:SkillsComponent
  },
  {
    path:'education', component:EducationComponent
  },
  {
    path:'work', component:WorkComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
