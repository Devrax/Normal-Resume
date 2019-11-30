# Super💪 Awesome🔥 but Normal💩 Resume 

>This project was generated with 🆖[Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## You know, I was bored again 👿.

I made this having in mind that someone else would like to have something similar, you can use it and do whatever you want with it, why I use Angular instead of Vue... Well, Angular is kinda hard and I love challenging so here we are, the project is done "Succesfully".

> I left some comments on places where as far as I know could be improved, so is upto you to make them better, so far, I'm working on them until I got a nice way to turn them better and simple

## You can use it, improve it, edit it according your desires, will and blah, blah...

> ❗❗❗ There is a part that is hard code because is no using the github's api to be dinamyc and working in a way to optimize that part, suggestion are welcome 

That part is located inside components `./src/app/components/curriculum/cv-aside/cv-aside.component.ts`.

Now, **why is hard code?** that's because, *smarty*, this is supposed to be a resume, well is trying to be one, but don't desperate as I said above, if you catch a simple way to do it, contact me and let's talk about.

## How to use

Go to the this project's root **once downloaded**, where you saved or cloned this project located this file `../provider/my-git.service.ts`

Follow this map
```shell
project
|
|__e2e<folder>
|__src<folder>
|  |
|  |__app<folder>
|  |  |
|  |  |__provider<This is the folder that we need to locate>
|  |
|  |...<more files/folders that we still shouldn't care>
|
|...<files that we don't actually care of>
```

Now follow me

```javascript
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {IUser, IRepo} from '../models/interfaces.types';

@Injectable({
  providedIn: 'root'
})
export class MyGitService {

  //more code that we don't care of

  private who = 'devrax'; //<----You have to change this username, my username and assign yours

  constructor(public http: HttpClient) { }
  //After this point we don't care
}
```

## Up to this point you may ask about the data that is static

Well, only the data that is inside `cv-aside.component.ts` is static, even the view is automatized, so, you only have to change the data that is inside an object called **asideData**, if you are wondering why is no-type, well, **Long Live to TypeScript's Type Inference**💕

You will see a sample of the page in description.

