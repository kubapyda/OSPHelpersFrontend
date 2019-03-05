import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Principal } from '@app/core/auth';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  isLoginPage: boolean;
  changeState: Subscription;

  constructor(private router: Router, private principal: Principal) {
    this.changeState = this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ).subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
    });
  }

  ngOnInit() {
    this.principal.getUserInfoFromToken();
  }

  ngOnDestroy() {
    this.changeState.unsubscribe();
  }
}
