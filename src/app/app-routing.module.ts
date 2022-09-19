import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { WorkDetailsComponent } from './shared/components/work-details/work-details.component';
import { DashboardComponent } from './work/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'detail/:id',
    component: WorkDetailsComponent
  },
  {
    path:'notFound',
    component: PageNotFoundComponent
  },

  {
    path: '**',
    redirectTo: 'notFound',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
