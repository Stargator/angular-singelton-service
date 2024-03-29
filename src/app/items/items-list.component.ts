import { Component, OnInit } from '@angular/core';
import { Observable }from 'rxjs';

import { Item,
         ItemService }     from './items.service';

@Component({
  template: `
    <h3>Items List</h3>
    <div *ngFor='let item of items | async'>
      <a routerLink="{{'../' + item.id}}">{{item.id}} - {{item.name}}</a>
    </div>
  `
})
export class ItemsListComponent {
  items: Observable<Item[]>;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/