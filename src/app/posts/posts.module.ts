import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  exports: [PostListComponent],
  declarations: [PostListComponent]
})
export class PostsModule { }
