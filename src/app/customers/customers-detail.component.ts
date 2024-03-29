import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Customer,
         CustomersService }    from './customers.service';

@Component({
  template: `
    <h3>Customer Detail</h3>
    <div *ngIf="customer">
      <div>Id: {{customer.id}}</div><br>
      <label>Name:
        <input [(ngModel)]="customer.name">
      </label>
    </div>
    <br>
    <a routerLink="../">Customer List</a>
  `
})
export class CustomersDetailComponent implements OnInit {
  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.customersService.getCustomer(id).subscribe(customer => this.customer = customer);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/