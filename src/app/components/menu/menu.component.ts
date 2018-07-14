import { Component, OnDestroy } from '@angular/core';

import { LoginService } from '../../core/auth/login.service';
import { MenuPosition } from '../../shared/model/menu-position';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy {

  menu: Array<MenuPosition>;

  constructor(private menuService: MenuService, public loginService: LoginService) {
    this.menu = this.createMenu();
  }

  private createMenu(): Array<MenuPosition> {
    this.menuService.addPosition('firefighters').addTranslation('menu.firefighters').addIcon('firefighters.png').save();
    this.menuService.addPosition('departures').addTranslation('menu.departures').addIcon('departures.png').save();
    this.menuService.addPosition('cars').addTranslation('menu.cars').addIcon('cars.png').save();
    this.menuService.addPosition('medicalExamination').addTranslation('menu.medicalExamination').addIcon('medicalExamination.png').save();
    this.menuService.addPosition('courses').addTranslation('menu.courses').addIcon('courses.png').save();
    this.menuService.addPosition('fees').addTranslation('menu.fees').addIcon('fees.png').save();
    this.menuService.addPosition('equipmentInvetory').addTranslation('menu.equipmentInvetory').addIcon('equipmentInvetory.png').save();
    return this.menuService.getMenu();
  }

  ngOnDestroy() {
    this.menuService.clearMenu();
  }

}
