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
      title: 'Aptitudes',
      items: ['Autonomous', 'Creative', 'Proactive', 'self-taught person', 'Organized' ]
    },
    {
      title: 'Languages',
      items: ['Spanish: Native', 'English: B1 - Intermediate']
    },
    {
      title: 'Programming',
      items: [
      'Javascript: Vue/Angular',
      'C#: Notions', 'Java: Notions',
      'Ruby: Entry level',
      'PHP: Don\'t hire me due to this...',
      'Python: Entry level'
    ]
    }
  ];

  public icon = faCheck;
  constructor() { }

  ngOnInit() {}

}
