import { Component, OnDestroy } from '@angular/core';

import { LoginService } from '@app/core/auth';
import { MenuPosition } from '@app/shared/model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy {
  menu: Array<MenuPosition>;

  constructor(
    private menuService: MenuService,
    public loginService: LoginService
  ) {
    this.menu = this.createMenu();
  }

  private createMenu(): Array<MenuPosition> {
    this.menuService
      .addPosition('firefighters')
      .addLink('firefighters')
      .addTranslation('menu.firefighters')
      .addIcon('firefighters.png')
      .setPermision('ADMIN')
      .save();
    this.menuService
      .addPosition('departures')
      .addLink('actions')
      .addTranslation('menu.departures')
      .addIcon('departures.png')
      .setPermision(['ADMIN', 'USER'])
      .save();
    this.menuService
      .addPosition('cars')
      .addLink('cars')
      .addTranslation('menu.cars')
      .addIcon('cars.png')
      .setPermision('ADMIN')
      .save();
    this.menuService
      .addPosition('medicalExamination')
      .addLink('medical-examination')
      .addTranslation('menu.medicalExamination')
      .addIcon('medicalExamination.png')
      .setPermision(['ADMIN', 'USER'])
      .save();
    this.menuService
      .addPosition('courses')
      .addLink('courses')
      .addTranslation('menu.courses')
      .addIcon('courses.png')
      .setPermision(['ADMIN', 'USER'])
      .setVisibility(false)
      .save();
    this.menuService
      .addPosition('fees')
      .addLink('payments')
      .addTranslation('menu.fees')
      .addIcon('fees.png')
      .setPermision(['ADMIN', 'USER'])
      .save();
    this.menuService
      .addPosition('equipmentInvetory')
      .addLink('equipment')
      .addTranslation('menu.equipmentInvetory')
      .addIcon('equipmentInvetory.png')
      .setPermision('ADMIN')
      .setVisibility(false)
      .save();
    return this.menuService.getMenu();
  }

  ngOnDestroy() {
    this.menuService.clearMenu();
  }
}
