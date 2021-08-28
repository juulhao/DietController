import { NgModule } from '@angular/core';

import { DietRoutingModule } from '@core/diet/diet-routing.module';

import { ListComponent } from '@core/diet/list/list.component';
import { RegisterComponent } from '@core/diet/register/register.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ListComponent, RegisterComponent],
  imports: [DietRoutingModule, SharedModule],
  exports: [ListComponent, RegisterComponent],
})
export class DietModule {}
