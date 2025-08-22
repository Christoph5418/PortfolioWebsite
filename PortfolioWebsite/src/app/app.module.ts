import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectMirnasComponent } from './projects/project-mirnas/project-mirnas.component';
import { ProjectPsuLabComponent } from './projects/project-psu-lab/project-psu-lab.component';
import { ProjectSAndPTrackerComponent } from './projects/project-s-and-p-tracker/project-s-and-p-tracker.component';
import { ProjectRohedgeComponent } from './projects/project-rohedge/project-rohedge.component';
import { ProjectPortfolioComponent } from './projects/project-portfolio/project-portfolio.component';
import { ProjectMedrivalComponent } from './projects/project-medrival/project-medrival.component';
import { ProjectTaleComponent } from './projects/project-tale/project-tale.component';
import { ProjectNlfComponent } from './projects/project-nlf/project-nlf.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ProjectMirnasComponent,
    ProjectPsuLabComponent,
    ProjectRohedgeComponent,
    ProjectPortfolioComponent,
    ProjectSAndPTrackerComponent,
    ProjectMedrivalComponent,
    ProjectTaleComponent,
    ProjectNlfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
