import * as _ from 'lodash';

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { Principal } from './principal.service';

@Directive({
  selector: '[appHasAnyAuthority]'
})
export class HasAnyAuthorityDirective {
  private authorities: string[];

  constructor(private principal: Principal, private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

  @Input()
  set appHasAnyAuthority(value: string | string[]) {
    this.authorities = typeof value === 'string' ? [value] : _.isNil(value) ? [] : value;
    this.updateView();
  }

  private updateView(): void {
    this.viewContainerRef.clear();
    if (_.isEmpty(this.authorities)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      if (this.authorities.indexOf(this.principal.getUserRole()) !== -1) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    }
  }
}
