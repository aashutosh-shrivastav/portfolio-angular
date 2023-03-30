import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {FormsModule  } from '@angular/forms';
import { ProjectPageModule } from './project-page/project-page.module';
import { HttpClientModule } from '@angular/common/http';
import { SkillPageComponent } from './skill-page/skill-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ProjectPageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
