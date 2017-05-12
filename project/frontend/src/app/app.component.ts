import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <toaster-container></toaster-container>
    <router-outlet></router-outlet>

  `
})
export class AppComponent  {}
