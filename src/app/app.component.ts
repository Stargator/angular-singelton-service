import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-greeting></app-greeting>
    <nav>
      <a routerLink="contact" routerLinkActive="active">Contact</a>
      <a routerLink="items" routerLinkActive="active">Items</a>
      <a routerLink="customers" routerLinkActive="active">Customers</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/