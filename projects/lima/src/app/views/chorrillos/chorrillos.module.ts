import { NgModule } from "@angular/core";
import { ChorrillosComponent } from "./chorrillos.component";

const COMPONENTS = [
  ChorrillosComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ChorrillosModule { }