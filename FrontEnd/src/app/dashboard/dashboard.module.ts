import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './units/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { PupilsComponent } from './pages/pupils-form/pupils.component';
import { PupilsListComponent } from './pages/pupils-list/pupils-list.component';
import { PupilsViewComponent } from './pages/pupils-view/pupils-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from './backend.service';
import { AnnouncementListComponent } from './pages/announcement-list/announcement-list.component';
import { AnnouncementFormComponent } from './pages/announcement-form/announcement-form.component';
import { PupilsEditComponent } from './pages/pupils-edit/pupils-edit.component';
import { AnnouncementEditComponent } from './pages/announcement-edit/announcement-edit.component';
import { SearchPipe } from './search.pipe';
import { CalenderComponent } from './pages/calender/calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    PupilsComponent,
    PupilsListComponent,
    PupilsViewComponent,
    AnnouncementListComponent,
    AnnouncementFormComponent,
    PupilsEditComponent,
    AnnouncementEditComponent,
    SearchPipe,
    CalenderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [BackendService,SearchPipe],


})
export class DashboardModule { }
