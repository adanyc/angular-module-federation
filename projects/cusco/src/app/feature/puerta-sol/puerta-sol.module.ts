import { NgModule } from "@angular/core";
import { PuertaSolRoutingModule } from "./puerta-sol.routing";
import { PuertaSolComponent } from "./views/puerta-sol.component";

const COMPONENTS = [
  PuertaSolComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [PuertaSolRoutingModule],
  exports: [...COMPONENTS],
})
export class PuertaSolModule { }