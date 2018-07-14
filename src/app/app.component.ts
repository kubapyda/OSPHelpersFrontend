import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  isLoginPage: boolean;
  changeState: Subscription;

  constructor(private router: Router) {
    this.changeState = this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ).subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
    });
  }

  ngOnDestroy() {
    this.changeState.unsubscribe();
  }
}
