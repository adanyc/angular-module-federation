import { NgModule } from "@angular/core";
import { ChorrillosComponent } from "./chorrillos.component";
import { ChorrillosRoutingModule } from "./chorrillos.routing";

const COMPONENTS = [
  ChorrillosComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [ChorrillosRoutingModule],
  exports: [...COMPONENTS],
})
export class ChorrillosModule { }