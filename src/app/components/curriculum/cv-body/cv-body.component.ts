import { Component, OnInit } from '@angular/core';
import {MyGitService} from '../../../provider/my-git.service';
import { Subscription } from 'rxjs';
import {IRepo} from '../../../models/interfaces.types';

import { faJsSquare, faHtml5, faCss3, faVuejs, faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cv-body',
  templateUrl: './cv-body.component.html',
  styleUrls: ['./cv-body.component.scss']
})
export class CvBodyComponent implements OnInit {

  public subscription: Subscription;
  public repositories: IRepo[] = [];

  /**
   * I create two objects property/value in order to make a match within the functions
   */
  public icons = {
    JavaScript: faJsSquare,
    CSS: faCss3,
    Vue: faVuejs,
    HTML: faHtml5,
    TypeScript: faAngular
  };

  public classes = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Vue: 'green',
    HTML: 'orange',
    TypeScript: 'red'
  }

  constructor(private api: MyGitService) { }

  ngOnInit() {
    this.subscription = this.api.getUserRepos().subscribe((repos: IRepo[]) => {
      this.repositories = [...repos.reverse()];
      this.api.stopLoading();
      this.subscription.unsubscribe();
    });
  }

  setHeadTheme(whatIs:string, language:string) {
    const keys: string[] = Object.keys(this.icons);
    return whatIs === 'class' ? this.setClass(keys, language) : this.setIcon(keys, language);
  }

  setIcon(languages: string[], icon: string) {
    return this.icons[languages.find((value: string) => value === icon)] || '😢';
  }

  setClass(languages: string[], theme: string) {
    return this.classes[languages.find((value: string) => value === theme)] || 'default';
  }

  short(word: string) {
    return word.length < 25 ? word : word.slice(0, 25) + '...';
  }

}
