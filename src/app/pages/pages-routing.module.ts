import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolComponent } from './school/school.component';
import { SchoolListComponent } from './school/school-list.component';
import { StudentListComponent } from './student/student-list.component';
import { PerformanceDataComponent } from './performance/data/performance-data.component';
import { PerformanceStarComponent } from './performance/star/performance-star.component';
import { PerformanceMetricsComponent } from './performance/metrics/performance-metrics.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AdminComponent } from './admin/admin.component';

export const PAGE_ROUTES: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      /* { path: 'dashboard', component: ECommerceComponent }, */
      { path: 'school', component: SchoolListComponent },
      { path: 'student', component: StudentListComponent },
      { path: 'performancedata', component: PerformanceDataComponent },
      { path: 'performancemetrics', component: PerformanceMetricsComponent },
      { path: 'performancestar', component: PerformanceStarComponent },
      { path: 'admin', component: AdminComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(PAGE_ROUTES)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
