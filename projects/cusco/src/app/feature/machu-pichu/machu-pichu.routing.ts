import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachuPichuComponent } from './views/machu-pichu.component';

const routes: Routes = [
  {
    path: '',
    component: MachuPichuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachuPichuRoutingModule { }
