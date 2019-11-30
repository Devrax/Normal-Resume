import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


const material = [
  MatTooltipModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatButtonModule,
  FontAwesomeModule,
  MatListModule
];

@NgModule({
  imports: [...material],
  exports: [...material]
})
export class NgmaterialModule {}
