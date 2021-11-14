import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const COMPONENTS = [
  LayoutComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports:[RouterModule],
  exports: [...COMPONENTS],
})
export class LayoutModule { }