import { NgModule } from "@angular/core";
import { MachuPichuComponent } from "./views/machu-pichu.component";
import { MachuPichuRoutingModule } from "./machu-pichu.routing";

const COMPONENTS = [
  MachuPichuComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [MachuPichuRoutingModule],
  exports: [...COMPONENTS],
})
export class MachuPichuModule { }