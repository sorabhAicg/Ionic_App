import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule) 
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];
 
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberModule { }