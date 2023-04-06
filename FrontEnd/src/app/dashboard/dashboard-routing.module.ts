import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PupilsComponent } from './pages/pupils-form/pupils.component';
import { PupilsListComponent } from './pages/pupils-list/pupils-list.component';
import { PupilsViewComponent } from './pages/pupils-view/pupils-view.component';
import { AnnouncementListComponent } from './pages/announcement-list/announcement-list.component';
import { AnnouncementFormComponent } from './pages/announcement-form/announcement-form.component';
import { PupilsEditComponent } from './pages/pupils-edit/pupils-edit.component';
import { AnnouncementEditComponent } from './pages/announcement-edit/announcement-edit.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'pupils', component: PupilsListComponent },
      { path: 'add-new', component: PupilsComponent },
      { path: 'view-item', component: PupilsViewComponent },
      { path: 'edit-item', component: PupilsEditComponent },
      { path: 'announcement-list', component: AnnouncementListComponent },
      { path: 'announcement-new', component: AnnouncementFormComponent },
      { path: 'announcement-edit', component: AnnouncementEditComponent },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
