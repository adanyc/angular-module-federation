import { NgModule } from "@angular/core";
import { LimaComponent } from "./lima.component";
import { LimaRoutingModule } from "./lima.routing.module";

const COMPONENTS = [
  LimaComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    LimaRoutingModule,
  ],
  exports: [...COMPONENTS],
})
export class LimaModule { }