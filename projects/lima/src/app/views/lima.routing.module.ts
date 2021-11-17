import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LimaComponent } from './lima.component';

const routes: Routes = [
  {
    path: '',
    component: LimaComponent,
    children: [
      {
        path: '',
        redirectTo: 'san-miguel',
        pathMatch: 'full',
      },
      {
        path: 'san-miguel',
        loadChildren: () => import('./san-miguel/san-miguel.module').then(m => m.SanMiguelModule)
      },
      {
        path: 'chorrillos',
        loadChildren: () => import('./chorrillos/chorrillos.module').then(m => m.ChorrillosModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LimaRoutingModule { }
