import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChorrillosComponent } from './views/chorrillos/chorrillos.component';
import { LimaComponent } from './views/lima.component';
import { SanMiguelComponent } from './views/san-miguel/san-miguel.component';

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
        component: SanMiguelComponent,
      },
      {
        path: 'chorrillos',
        component: ChorrillosComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
