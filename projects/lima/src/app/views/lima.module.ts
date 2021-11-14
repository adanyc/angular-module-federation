import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChorrillosModule } from "./chorrillos/chorrillos.module";
import { LimaComponent } from "./lima.component";
import { SanMiguelModule } from "./san-miguel/san-miguel.module";

const COMPONENTS = [
  LimaComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ChorrillosModule,
    SanMiguelModule,
    RouterModule,
  ],
  exports: [...COMPONENTS],
})
export class LimaModule { }