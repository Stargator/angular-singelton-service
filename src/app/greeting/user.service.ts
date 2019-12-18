
import { Injectable, Optional } from '@angular/core';

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

  constructor(@Optional() config: UserServiceConfig) {
    console.log('UserService instance created.');
    if (config) { this._userName = config.userName; }
  }

  get userName() {
    // Demo: add a suffix if this service has been created more than once
    console.log("Sending user info");
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/