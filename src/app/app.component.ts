import { Component } from '@angular/core';
import {DataService} from './services/data.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <h1 [ngClass]="titleClasses">Hey guys!</h1>
  <h2 [ngStyle]="titleStyles">Hello dude!</h2>
  <p>{{someProperty}}</p>

  <p [@myAwesomeAnimation]='state' (click)='animateMe()'>I will animate</p>
  `,
  styles : [`
   h1 {
     text-decoration:underline;
   }

   .red-title {
     color: red
   }

   .large-title {
     font-size:4em
   }
   p {
     width:200px;
     background: lightgray,
     margin: 100px auto;
     text-align: center;
     padding:20px;
     font-size: 1.5em;
   }
  `],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in') )
    ]),

  ]
})
export class AppComponent {
  someProperty: string = '';
  state:string = 'small';
  
  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.svg';
  buttonStatus = false;

  titleClass = 'red-title';

  titleClasses = {
    'red-title': false,
    'large-title': true
  };

  titleStyles = {
    'color': 'red',
    'font-size': '4em'
  };

  myEvent(event) {
console.log(event);
  }

  constructor(private dataService: DataService) {

  }


  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

  animateMe() {
    this.state = (this.state === 'small'?'large':'small');
  }
}
