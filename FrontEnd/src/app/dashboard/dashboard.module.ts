import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './units/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { PupilsComponent } from './pages/pupils/pupils.component';
import { PupilsListComponent } from './pages/pupils-list/pupils-list.component';
import { PupilsViewComponent } from './pages/pupils-view/pupils-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from './backend.service';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    PupilsComponent,
    PupilsListComponent,
    PupilsViewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BackendService],


})
export class DashboardModule { }
