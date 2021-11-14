import { NgModule } from "@angular/core";
import { SanMiguelComponent } from "./san-miguel.component";

const COMPONENTS = [
  SanMiguelComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SanMiguelModule { }