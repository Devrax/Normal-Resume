import { Component } from '@angular/core';
import {faAngular} from '@fortawesome/free-brands-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import {MyGitService} from './provider/my-git.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('isLoaded', [
      state('loading', style({
        top: 0
      })),
      state('stop', style({
        top: '-2000px'
      })),
      transition('loading <=> stop', [
        animate('1s')
      ])
    ])
  ]
})
export class AppComponent {
  public icon = faAngular;
  constructor(public api: MyGitService) {}

}
