import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Item,
  ItemService }     from './items.service';

@Component({
  template: `
    <h3 highlight>Item Detail</h3>
    <div>Item id: {{id}}</div>
    <br>
    <a routerLink="../list">Items List</a>
  `
})
export class ItemsDetailComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/