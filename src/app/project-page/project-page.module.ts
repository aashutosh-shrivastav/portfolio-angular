import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProjectCardComponent } from './project-card/project-card.component';
import {MatCardModule  } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    ProjectPageComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:
  [
    ProjectPageComponent
  ]
})
export class ProjectPageModule {}

