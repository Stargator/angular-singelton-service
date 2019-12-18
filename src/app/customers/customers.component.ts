import { Component }   from '@angular/core';

import { CustomersService } from './customers.service';
import { UserService } from '../greeting/user.service';

@Component({
  template: `
    <h2>Customers of {{userName}}</h2>
    <button type="button" class="btn" (click)="sendMessage()">
    Send Message</button>

    <router-outlet></router-outlet>
  `,
  // providers: [ UserService ]
})
export class CustomersComponent {
  userName = '';

  constructor(private userService: UserService) {
    this.userName = userService.userName;
  }

  sendMessage(): void {
    console.log('message sent');
    this.userService.broadcast('testCall', 'Special Message', 'double', 'trouble');
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/