import { NgModule } from '@angular/core';

import { DietModule } from '@core/diet/diet.module';

@NgModule({
  imports: [
    DietModule
  ],
  exports: [
    DietModule

  ],
  providers: [],
  declarations: [

  ],
})
export class CoreModule { }
