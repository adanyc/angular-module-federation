import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChorrillosComponent } from './chorrillos.component';

const routes: Routes = [
  {
    path: '',
    component: ChorrillosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChorrillosRoutingModule { }
