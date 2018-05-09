import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentsRoutingModule } from './coments-routing.module';
import { CommentsListComponent } from './comments-list/comments-list.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ComentsRoutingModule,
    SharedModule
  ],
  exports: [CommentsListComponent],
  declarations: [CommentsListComponent]
})
export class ComentsModule { }
