import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cv-aside',
  templateUrl: './cv-aside.component.html',
  styleUrls: ['./cv-aside.component.scss']
})
export class CvAsideComponent implements OnInit {

  public asideData: any = [
    {
      title: 'Languages',
      items: ['English: B1 - Intermediate', 'Spanish: Native']
    },
    {
      title: 'Aptitudes',
      items: ['Creative', 'Autonomous', 'Proactive', 'Organized', 'Self-taught person']
    },
    {
      title: 'Programming',
      items: [
      'C#: Notions',
      'Java: Notions',
      'Javascript: Vue/Angular',
      'PHP: Don\'t hire me due to this...',
      'Python: Entry level',
      'Ruby: Entry level'
    ]
    }
  ];

  public icon = faCheck;
  constructor() { }

  ngOnInit() {}

}
