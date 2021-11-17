import { NgModule } from "@angular/core";
import { SanMiguelComponent } from "./san-miguel.component";
import { SanMiguelRoutingModule } from "./san-miguel.routing";

const COMPONENTS = [
  SanMiguelComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SanMiguelRoutingModule],
  exports: [...COMPONENTS],
})
export class SanMiguelModule { }