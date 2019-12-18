import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer,
         CustomersService } from './customers.service';
import { UserService } from '../greeting/user.service';

@Component({
  template: `
    <h3>Customer List</h3>
    <p>{{message}}</p>
    <div *ngFor='let customer of customers | async'>
      <a routerLink="{{customer.id}}">{{customer.id}} - {{customer.name}}</a>
    </div>
  `
})

export class CustomersListComponent implements OnInit {
  customers: Observable<Customer[]>;
  message = 'Nothing to see';

  constructor(private customersService: CustomersService, private userService: UserService) {
    this.customers = this.customersService.getCustomers();
  }

  ngOnInit(): void {
    console.log('OnInit list');

    this.userService.on('testCall', (first, second, third) => {
      console.log('messageReceived: ', first);
      this.message = this.message + second;
      console.log('third? => : ', third);
    });
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/