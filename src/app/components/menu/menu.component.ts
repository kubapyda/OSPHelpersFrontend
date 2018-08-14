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
      .save();
    this.menuService
      .addPosition('departures')
      .addLink('')
      .addTranslation('menu.departures')
      .addIcon('departures.png')
      .save();
    this.menuService
      .addPosition('cars')
      .addLink('cars')
      .addTranslation('menu.cars')
      .addIcon('cars.png')
      .save();
    this.menuService
      .addPosition('medicalExamination')
      .addLink('')
      .addTranslation('menu.medicalExamination')
      .addIcon('medicalExamination.png')
      .save();
    this.menuService
      .addPosition('courses')
      .addLink('')
      .addTranslation('menu.courses')
      .addIcon('courses.png')
      .save();
    this.menuService
      .addPosition('fees')
      .addLink('')
      .addTranslation('menu.fees')
      .addIcon('fees.png')
      .save();
    this.menuService
      .addPosition('equipmentInvetory')
      .addLink('')
      .addTranslation('menu.equipmentInvetory')
      .addIcon('equipmentInvetory.png')
      .save();
    return this.menuService.getMenu();
  }

  ngOnDestroy() {
    this.menuService.clearMenu();
  }
}
