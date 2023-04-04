import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PupilsComponent } from './pages/pupils/pupils.component';
import { PupilsListComponent } from './pages/pupils-list/pupils-list.component';
import { PupilsViewComponent } from './pages/pupils-view/pupils-view.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'pupils', component: PupilsListComponent },
      {path:'add-new',component:PupilsComponent},
      {path:'view-item',component:PupilsViewComponent}


    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
