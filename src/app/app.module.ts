import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {NgmaterialModule} from './ngmaterial/ngmaterial.module';

import { MyGitService } from './provider/my-git.service';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { CvBodyComponent } from './components/curriculum/cv-body/cv-body.component';
import { CvAsideComponent } from './components/curriculum/cv-aside/cv-aside.component';
@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    CvBodyComponent,
    CvAsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgmaterialModule,
    HttpClientModule
  ],
  providers: [MyGitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
