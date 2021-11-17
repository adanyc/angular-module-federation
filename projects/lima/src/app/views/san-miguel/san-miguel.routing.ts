import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanMiguelComponent } from './san-miguel.component';

const routes: Routes = [
  {
    path: '',
    component: SanMiguelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanMiguelRoutingModule { }
