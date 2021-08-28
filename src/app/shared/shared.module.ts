import { NgModule } from '@angular/core';

// Material Modules
import { MatButtonModule } from '@angular/material/button';

// Shared Components
import { ButtonComponent } from './components/button/button.component';

const components = [ButtonComponent];

@NgModule({
  imports: [MatButtonModule],
  declarations: [...components],
  exports: [
    ...components
  ],
})
export class SharedModule {}
