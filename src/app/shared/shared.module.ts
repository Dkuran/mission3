import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

import { ResourceService } from './resource.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ],
  providers: [ResourceService],
  declarations: [CardComponent]
})
export class SharedModule { }
