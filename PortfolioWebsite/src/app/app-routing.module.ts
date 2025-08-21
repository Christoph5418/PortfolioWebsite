import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectMirnasComponent } from './projects/project-mirnas/project-mirnas.component';
import { ProjectSAndPTrackerComponent } from './projects/project-s-and-p-tracker/project-s-and-p-tracker.component';
import { ProjectRohedgeComponent } from './projects/project-rohedge/project-rohedge.component';
import { ProjectPsuLabComponent } from './projects/project-psu-lab/project-psu-lab.component';
import { ProjectPortfolioComponent } from './projects/project-portfolio/project-portfolio.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'mirnas-website', component: ProjectMirnasComponent},
  {path: 's-and-p-tracker', component: ProjectSAndPTrackerComponent},
  {path: 'rohedge', component: ProjectRohedgeComponent},
  {path: 'canzar-lab', component: ProjectPsuLabComponent},
  {path: 'portfolio-website', component: ProjectPortfolioComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
