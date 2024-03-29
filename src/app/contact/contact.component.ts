// Exact copy except import UserService from greeting
import { Component, OnInit }      from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Contact, ContactService } from './contact.service';
import { UserService }             from '../greeting/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})
export class ContactComponent implements OnInit {
  contact:  Contact;
  contacts: Contact[];

  msg = 'Loading contacts ...';
  userName = '';

  contactForm = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private contactService: ContactService, private userService: UserService, private fb: FormBuilder) {
    console.log("Contact -> " + userService.userName);
    this.userName = userService.userName;
  }

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.contactService.getContacts().subscribe(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
      this.contactForm.get('name').setValue(this.contact.name);
    });
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) { ix = 0; }
    this.contact = this.contacts[ix];
    console.log(this.contacts[ix]);
  }

  onSubmit() {
    let newName = this.contactForm.get('name').value;
    this.displayMessage('Saved ' + newName);
    this.contact.name = newName;
  }

  newContact() {
    this.displayMessage('New contact');
    this.contactForm.get('name').setValue('');
    this.contact = {id: 42, name: ''};
    this.contacts.push(this.contact);
  }

  // sendMessage(): void {
  //   this.userService.broadcast('testCall', 'Special Message');
  // }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/