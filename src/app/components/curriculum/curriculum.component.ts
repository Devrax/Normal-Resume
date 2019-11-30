import { Component, OnInit } from '@angular/core';
import {MyGitService} from '../../provider/my-git.service';
import {IUser} from '../../models/interfaces.types';
import { Subscription } from 'rxjs';

import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faUserCircle, faWalking, faFolder, faFolderMinus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  /**
   * Just Dummy Data
   */
  public myInfo: IUser = {
    name: 'Tu asombroso nombre',
    avatar_url: 'assets/sample.jpg',
    html_url: 'www.nomesigas.com',
    bio: 'Tu asombrosa historia',
    public_repos: 7,
    followers: 1000,
    following: 4,
    hireable: false,
    login: 'Aqui tu user name!'
  };

  public subscription: Subscription;

  /**
   * I assigned values to each property in order to
   * the functions obtain the key and later use it
   * to obtain the value
   */
  private icons = {
    html_url: faGithubSquare,
    public_repos: faFolder,
    followers: faUserCircle,
    following: faWalking
  };

  /**
   * This array is being used by the view to provides the special keys
   * that will be used by the functions in order to put the correct icon and info
   */
  public keywords: string[] = ['html_url', 'public_repos', 'followers', 'following'];

  constructor(private api: MyGitService) { }

  ngOnInit() {
    this.init();
  }

  /**
   * Start the HTTP request to Github's api and reassign the values of the object myInfo.
   * @returns void;
   */
  private init() {
    this.subscription = this.api.getUser().subscribe((githubInfo: IUser) => {
      this.myInfo = githubInfo;
      this.api.stopLoading();
      this.subscription.unsubscribe();
    });
  }

  /**
   * Assign the correct icon according the key provided from the view
   * @param key;
   */
  public setIcon(key: string) {
    const keys = Object.keys(this.icons);
    return this.icons[keys.find((value: string) => value === key)];
  }

  /**
   * Provide a custom info for the tooltip attribute according the provided key
   * MUST TO BE IMPROVE
   * @param key;
   */
  public setInfo(key: string) {
    const user = this.myInfo.login;
    const value = this.myInfo[key];

    let message: string;
    if (key === 'html_url') {
      message = `${user}'s github`;
    }
    if(key === 'public_repos') {
      message = `${user} has ${value} public repos`;
    }
    if(key === 'followers') {
      message = `${user} is being followed by ${value} ${value === 1 ? 'user' : 'users'}`;
    }
    if (key === 'following') {
      message = `${user} is following ${value} ${value === 1 ? 'user' : 'users'}`;
    }

    return message ? message : 'Analiza bien lo que haz hecho';
  }


}
