import { Injectable, Optional } from '@angular/core';
import { from, Subject } from 'rxjs';

let nextId = 1;

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id = nextId++;
  private _userName = 'Sherlock Holmes';
  listeners: any; // In usage, think of it as a Map of type <string, Function>.
  eventsSubject: any;
  events: any;

  constructor(@Optional() config: UserServiceConfig) {
    if (config) { this._userName = config.userName; }

    this.listeners = {};
    this.eventsSubject = new Subject();

    this.events = from(this.eventsSubject);

    this.events.subscribe(
        // @ts-ignore
        ({name, args}) => {
          if (this.listeners[name]) {
              console.log('name => ', name);
            for (let listener of this.listeners[name]) {
              console.log('args => ', ...args);
              listener(...args);
            }
          }
        });
  }

  get userName() {
    // Demo: add a suffix if this service has been created more than once
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }

  on(name: string, listener: any): void {
    console.log('subscribed');
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    this.listeners[name].push(listener);
  }

  off(name: string, listener: any): void {
    // @ts-ignore
    this.listeners[name] = this.listeners[name].filter(x => x != listener);
  }

  broadcast(name: string, ...args): void {
    console.log('broadcast called: ', ...args);
    this.eventsSubject.next({ // TODO verify this will work as is
      name,
      args
    });
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/